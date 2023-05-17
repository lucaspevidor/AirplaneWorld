import {expect, describe, test} from "vitest";
import { AircraftManager } from "../../../src/controllers/AircraftManager";
import { AircraftCategory, AircraftMission, AircraftModel, AircraftPropSubType, AircraftPropType, AircraftSize, AircraftSpecs } from "../../../src/models/AircraftModel";
import { Location } from "../../../src/models/Location";
import { Aircraft } from "../../../src/models/Aircraft";

describe("AircraftManager", () => {
    test("AircraftManager creation", () => {
        const aircraftManager = AircraftManager.GetInstance();
        expect(aircraftManager).toBeDefined();
        expect(AircraftManager.GetInstance()).toStrictEqual(aircraftManager);
    });

    const aircraftManager = AircraftManager.GetInstance();
    const specs1: AircraftSpecs = {
        capacity: 1,
        manufacturer: "Lockheed Martin",
        size: AircraftSize.Small,
        category: [AircraftCategory.Military],
        propType: AircraftPropType.SingleEngine,
        propSubType: AircraftPropSubType.TurboJet,
        availableMissions: [AircraftMission.Fighter],
        grossWeight: 80000,
        fuelCapacity: 12000,
        efficiency: 0.3,
        maxSpeed: 1200,
        maxHeight: 55000,
        maxWeight: 120000
    };
    const specs2: AircraftSpecs = {
        ...specs1,
        manufacturer: "Boeing",
        maxSpeed: 1000,
    };

    const model1 = new AircraftModel(0, "F-16", specs1);
    const model2 = new AircraftModel(1, "F-18", specs2);

    const location1 = new Location(0, 0);
    const location2 = new Location(0, 0);

    test("AircraftManager CreateAircraft", () => {
        const aircraft1 = aircraftManager.CreateAircraft("TAIL1", model1, 1980, location1);
        const aircraft2 = aircraftManager.CreateAircraft("TAIL2", model2, 1975, location2);

        expect(aircraft1).toBeInstanceOf(Aircraft);
        expect(aircraft2).toBeInstanceOf(Aircraft);

        expect(aircraft1.id).toEqual(0);
        expect(aircraft1.tailCode).toEqual("TAIL1");
        expect(aircraft2.id).toEqual(1);
        expect(aircraft2.tailCode).toEqual("TAIL2");
    });

    test("AircraftManager CreateAircraft with invalid parameters should fail", () => {
        expect(() => {aircraftManager.CreateAircraft("", model1, 1980, location1);}).toThrowError();
        expect(() => {aircraftManager.CreateAircraft("", model1, 1900, location1);}).toThrowError();
    });

    test("AircraftManager GetAircraft", () => {
        const aircraft1 = aircraftManager.GetAircraft(0);
        const aircraft2 = aircraftManager.GetAircraft(1);
        const invalidAircraft = aircraftManager.GetAircraft(2);

        expect(aircraft1).toBeInstanceOf(Aircraft);
        expect(aircraft1.id).toEqual(0);
        expect(aircraft1.tailCode).toEqual("TAIL1");
        
        expect(aircraft2).toBeInstanceOf(Aircraft);
        expect(aircraft2.id).toEqual(1);
        expect(aircraft2.tailCode).toEqual("TAIL2");
        
        expect(invalidAircraft).toBeUndefined();
    });

    test("AircraftManager DeleteAircraft", () => {
        const aircraft1 = aircraftManager.GetAircraft(0);
        expect(aircraft1.id).toEqual(0);
        expect(aircraftManager.DeleteAircraft(aircraft1)).toBeTruthy();
        expect(aircraftManager.GetAircraft(0)).toBeUndefined();
    });

    test("AircraftManager DeleteAircraft with invalid aircraft should fail", () => {
        const invalidAircraft = new Aircraft(3, "TAIL3", model2, 1985);
        expect(aircraftManager.DeleteAircraft(invalidAircraft)).toBeFalsy();
    });

    test("AircraftManager DeleteAircraftById", () => {
        const aircraft2 = aircraftManager.GetAircraft(1);
        expect(aircraft2.id).toEqual(1);
        expect(aircraft2.tailCode).toEqual("TAIL2");
        expect(aircraftManager.DeleteAircraftById(1)).toBeTruthy();
        expect(aircraftManager.GetAircraft(1)).toBeUndefined();
    });

    test("AircraftManager DeleteAircraftById with invalid id should fail", () => {
        expect(aircraftManager.DeleteAircraftById(1)).toBeFalsy();
    });
});
