import { test, describe, expect } from "vitest";
import { AirportManager } from "../../../src/controllers/AirportManager";
import { RunwayManager } from "../../../src/controllers/RunwayManager";
import { Location } from "../../../src/models/Location";
import { Airport } from "../../../src/models/Airport";
import { Runway } from "../../../src/models/Runway";

describe("AirportRunwayInteraction", () => {
    const airportManager = AirportManager.GetInstance();
    const runwayManager = RunwayManager.GetInstance();

    test("Airport creation", () => {
        const airport1 = airportManager.CreateAirport("LAX", new Location(0, 0));
        const airport2 = airportManager.CreateAirport("SBCF", new Location(10, 10));

        expect(airport1).toBeInstanceOf(Airport);
        expect(airport2).toBeInstanceOf(Airport);
    });

    test("Runway creation", () => {
        expect(airportManager.AddRunwayToAirport("LAX", 1000, 30, 0)).toBeTruthy();
        expect(airportManager.AddRunwayToAirport("LAX", 2000, 50, 90)).toBeTruthy();

        expect(airportManager.AddRunwayToAirport("SBCF", 2500, 15, 180)).toBeTruthy();
        expect(airportManager.AddRunwayToAirport("SBCF", 1500, 30, 270)).toBeTruthy();
    });

    test("Runway creation with invalid airport fails", () => {
        expect(airportManager.AddRunwayToAirport("SBBH", 1000, 30, 0)).toBeFalsy();
    });

    test("Retrieve runways from airport", () => {
        const airport1 = airportManager.GetAirport("LAX");
        const airport2 = airportManager.GetAirport("SBCF");

        if (!airport1 || !airport2)
            throw new Error("airports are invalid");

        expect(airport1.runways).toContain(0);
        expect(airport1.runways).toContain(1);
        expect(airport2.runways).toContain(2);
        expect(airport2.runways).toContain(3);

        const runway1 = runwayManager.GetRunway(airport1.runways[0]);
        const runway2 = runwayManager.GetRunway(airport1.runways[1]);
        const runway3 = runwayManager.GetRunway(airport2.runways[0]);
        const runway4 = runwayManager.GetRunway(airport2.runways[1]);

        expect(runway1).toBeInstanceOf(Runway);
        expect(runway2).toBeInstanceOf(Runway);
        expect(runway3).toBeInstanceOf(Runway);
        expect(runway4).toBeInstanceOf(Runway);

        expect(runway1?.length).toEqual(1000);
        expect(runway2?.length).toEqual(2000);
        expect(runway3?.length).toEqual(2500);
        expect(runway4?.length).toEqual(1500);

        expect(runway1?.airportCode).toEqual("LAX");
        expect(runway2?.airportCode).toEqual("LAX");
        expect(runway3?.airportCode).toEqual("SBCF");
        expect(runway4?.airportCode).toEqual("SBCF");
    });

    test("Remove runways from airport", () => {
        expect(runwayManager.GetRunway(0)).toBeInstanceOf(Runway);
        expect(airportManager.GetAirport("LAX")?.runways[0]).toEqual(0);
        expect(airportManager.RemoveRunwayFromAirport("LAX", 0)).toBeTruthy();
        expect(runwayManager.GetRunway(0)).toBeUndefined();
        expect(airportManager.GetAirport("LAX")?.runways[0]).toEqual(1);

        expect(runwayManager.GetRunway(1)).toBeInstanceOf(Runway);
        expect(runwayManager.GetRunway(2)).toBeInstanceOf(Runway);
        expect(runwayManager.GetRunway(3)).toBeInstanceOf(Runway);
    });

    test("Remove runway from undefined airport fails", () => {
        expect(runwayManager.GetRunway(1)).toBeInstanceOf(Runway);
        expect(airportManager.RemoveRunwayFromAirport("SBBH", 1)).toBeFalsy();
        expect(runwayManager.GetRunway(1)).toBeInstanceOf(Runway);
    });

    test("Remove undefined runway from airport fails", () => {
        const airport = airportManager.GetAirport("SBCF");
        expect(airport?.runways).toContain(2);
        expect(airport?.runways).toContain(3);

        expect(airportManager.RemoveRunwayFromAirport("SBCF", 5)).toBeFalsy();

        expect(airport?.runways).toContain(2);
        expect(airport?.runways).toContain(3);
        expect(airportManager.GetAirport("LAX")?.runways).toContain(1);
    });

    test("Remove runway from another airport fails", () => {
        expect(runwayManager.GetRunway(2)).toBeInstanceOf(Runway);
        expect(airportManager.GetAirport("LAX")?.runways).not.contain(2);
        expect(airportManager.RemoveRunwayFromAirport("LAX", 2)).toBeFalsy();
        expect(runwayManager.GetRunway(2)).toBeInstanceOf(Runway);
    });

    test("Delete airport should delete runways", () => {
        const airport = airportManager.GetAirport("SBCF");
        expect(airport?.runways).toContain(2);
        expect(airport?.runways).toContain(3);
        expect(runwayManager.GetRunway(2)).toBeInstanceOf(Runway);
        expect(runwayManager.GetRunway(3)).toBeInstanceOf(Runway);

        if (!airport)
            throw new Error("airport is undefined");

        expect(airportManager.DeleteAirport(airport)).toBeTruthy();
        expect(airportManager.GetAirport("SBCF")).toBeUndefined();

        expect(runwayManager.GetRunway(1)).toBeInstanceOf(Runway);
        expect(runwayManager.GetRunway(2)).toBeUndefined();
        expect(runwayManager.GetRunway(3)).toBeUndefined();
    });

    test("Delete airport with code should delete runways", () => {
        const airport = airportManager.GetAirport("LAX");
        expect(airport?.runways).toContain(1);
        expect(runwayManager.GetRunway(1)).toBeInstanceOf(Runway);

        if (!airport)
            throw new Error("airport is undefined");

        expect(airportManager.DeleteAirportByCode("LAX")).toBeTruthy();
        expect(airportManager.GetAirport("LAX")).toBeUndefined();

        expect(runwayManager.GetRunway(1)).toBeUndefined();
    });
});