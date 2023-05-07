import { test, describe, expect } from "vitest";
import { AirportManager } from "../../../src/controllers/AirportManager";
import { Airport } from "../../../src/models/Airport";
import { Location } from "../../../src/models/Location";

describe("AirportManager", () => {
    test("AirportManager creation", () => {
        const airportManager = AirportManager.GetInstance();
        expect(airportManager).toBeDefined();    
        expect(AirportManager.GetInstance()).toStrictEqual(airportManager);
    });

    const airportManager = AirportManager.GetInstance();
    const location1 = new Location(10, 10);
    const location2 = new Location(20, 20);

    test("AirportManager CreateAirport", () => {
        const airport1 = airportManager.CreateAirport("LAX", location1);
        const airport2 = airportManager.CreateAirport("SBCF", location2);
        
        expect(airport1).toBeInstanceOf(Airport);
        expect(airport1.code).toEqual("LAX");
        expect(airport2.code).toEqual("SBCF");
    });

    test("AirportManager CreateAirport with invalid parameter", () => {
        expect(() => airportManager.CreateAirport("", new Location(0, 0)))
            .toThrowError("Invalid airport code provided");
        expect(() => airportManager.CreateAirport("LAX", new Location(0, 0)))
            .toThrowError("An airport with the provided code already exists");
        expect(() => airportManager.CreateAirport("SBBH", new Location(95, 0))).toThrowError();
        expect(() => airportManager.CreateAirport("SBBH", new Location(0, 185))).toThrowError();
    });

    test("AirportManager GetAirport", () => {
        const airport1 = airportManager.GetAirport("LAX");
        const airport2 = airportManager.GetAirport("SBCF");

        expect(airport1).toBeInstanceOf(Airport);
        expect(airport2).toBeInstanceOf(Airport);
        expect(airportManager.GetAirport("SBBH")).toBeUndefined();
    });

    test("AirportManager UpdateAirportLocation", () => {
        const airport1 = airportManager.GetAirport("LAX");
        expect(airport1).toBeInstanceOf(Airport);
        if (!airport1)
            throw new Error("airport1 is undefined");

        expect(airport1.location).toEqual(location1);
        expect(airportManager.UpdateAirportLocation("LAX", location2)).toBeTruthy();
        expect(airport1.location).toEqual(location2);

        expect(airportManager.UpdateAirportLocation("SBBH", location2)).toBeFalsy();
    });

    test("AirportManager DeleteAirport", () => {
        const airport1 = airportManager.GetAirport("LAX");
        if (!airport1)
            throw new Error("airport1 is undefined");
        
        expect(airportManager.DeleteAirport(airport1)).toBeTruthy();
        expect(airportManager.DeleteAirport(airport1)).toBeFalsy();
        expect(airportManager.GetAirport("LAX")).toBeUndefined();
        expect(airportManager.GetAirport("SBCF")).toBeInstanceOf(Airport);
    });

    test("AirportManager DeleteAirportByCode", () => {
        expect(airportManager.GetAirport("SBCF")).toBeInstanceOf(Airport);
        expect(airportManager.DeleteAirportByCode("SBCF")).toBeTruthy();
        expect(airportManager.DeleteAirportByCode("SBCF")).toBeFalsy();
        expect(airportManager.GetAirport("SBCF")).toBeUndefined();
    });
});
