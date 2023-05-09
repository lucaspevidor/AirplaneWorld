import { describe, expect, test } from "vitest";
import { Aircraft } from "../../../src/models/Aircraft";
import { Location } from "../../../src/models/Location";
import { AircraftCategory, AircraftMission, AircraftModel, AircraftPropSubType, AircraftPropType, AircraftSize } from "../../../src/models/AircraftModel";

describe("Aircraft", () => {
    const aircraftModel = new AircraftModel(
        0, "747-800", 
        {
            capacity: 500,
            manufacturer: "Boeing",
            size: AircraftSize.VeryLarge,
            category: [AircraftCategory.Civilian],
            propType: AircraftPropType.MultiEngine,
            propSubType: AircraftPropSubType.TurboJet,
            availableMissions: [AircraftMission.Transport, AircraftMission.Cargo],
            grossWeight: 100000,
            fuelCapacity: 10000,
            efficiency: 0.5,
            maxSpeed: 1000,
            maxHeight: 40000,
            maxWeight: 150000
        }
    );

    test("Create Aircraft", () => {
        expect(new Aircraft(0, "YSGMS-2", aircraftModel, 1980))
            .toBeInstanceOf(Aircraft);
    });

    test("Create Aircraft with empty tail code should fail", () => {
        expect(() => new Aircraft(0, "", aircraftModel, 1980))
            .toThrowError("Tail code cannot be empty");
    });

    test("Create Aircraft with year before 1903 should fail", () => {
        expect(() => new Aircraft(0, "YKSM-3", aircraftModel, 1902))
            .toThrowError("Year cannot be before 1903");
    });

    test("Aircraft getters", () => {
        const aircraft = new Aircraft(0, "YGSM-3", aircraftModel, 1980);
        expect(aircraft.id).toEqual(0);
        expect(aircraft.model).toBe(aircraftModel);
        expect(aircraft.tailCode).toEqual("YGSM-3");
        expect(aircraft.year).toEqual(1980);
        expect(aircraft.visible).toEqual(true);
        expect(aircraft.location).toBeInstanceOf(Location);
        expect(aircraft.location.lat).toEqual(0);
        expect(aircraft.location.lon).toEqual(0);
    });

    test("Aircraft setters", () => {
        const aircraft = new Aircraft(0, "YGSM-3", aircraftModel, 1980);
        aircraft.tailCode = "YGSM-4";
        aircraft.year = 1981;
        aircraft.visible = false;
        aircraft.location = new Location(1, 2);
        expect(aircraft.tailCode).toEqual("YGSM-4");
        expect(aircraft.year).toEqual(1981);
        expect(aircraft.visible).toEqual(false);
        expect(aircraft.location).toBeInstanceOf(Location);
        expect(aircraft.location.lat).toEqual(1);
        expect(aircraft.location.lon).toEqual(2);
    });

    test("Setting aircraft tail code to empty should fail", () => {
        const aircraft = new Aircraft(0, "YGSM-3", aircraftModel, 1980);
        expect(() => aircraft.tailCode = "")
            .toThrowError("Tail code cannot be empty");
        expect(aircraft.tailCode).toEqual("YGSM-3");
    });

    test("Setting aircraft year to before 1903 should fail", () => {
        const aircraft = new Aircraft(0, "YGSM-3", aircraftModel, 1980);
        expect(() => aircraft.year = 1902)
            .toThrowError("Year cannot be before 1903");
    });
});