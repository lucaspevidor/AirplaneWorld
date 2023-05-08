import {test, expect, describe} from "vitest";
import {AircraftCategory, AircraftMission, AircraftModel, AircraftPropSubType, AircraftPropType, AircraftSize} from "../../../src/models/AircraftModel";

describe("AircraftModel", () => {
    const id = 0;
    const name = "747-800";
    const capacity = 500;
    const manufacturer = "Boeing";
    const size = AircraftSize.VeryLarge;
    const category = [AircraftCategory.Civilian];
    const proptype = AircraftPropType.MultiEngine;
    const propSubType = AircraftPropSubType.TurboJet;
    const mission = [AircraftMission.Transport, AircraftMission.Cargo];
    const grossWeight = 100000;
    const fuelCapacity = 10000;
    const efficiency = 0.5;
    const maxSpeed = 1000;
    const maxHeight = 40000;
    const maxWeight = 150000;

    test("AircraftModel creation", () => {
        expect(new AircraftModel(
            id,
            name,
            capacity,
            manufacturer,
            size,
            category,
            proptype,
            propSubType,
            mission,
            grossWeight,
            fuelCapacity,
            efficiency,
            maxSpeed,
            maxHeight,
            maxWeight
        )).toBeInstanceOf(AircraftModel);
    });

    test("AircraftModel creation with invalid name should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                "",
                capacity,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                mission,
                grossWeight,
                fuelCapacity,
                efficiency,
                maxSpeed,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Name cannot be empty");
    });

    test("AircraftModel creation with invalid capacity should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                -1,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                mission,
                grossWeight,
                fuelCapacity,
                efficiency,
                maxSpeed,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Capacity must be greater than 0");
    });

    test("AircraftModel creation with invalid manufacturer should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                "",
                size,
                category,
                proptype,
                propSubType,
                mission,
                grossWeight,
                fuelCapacity,
                efficiency,
                maxSpeed,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Manufacturer cannot be empty");
    });

    test("AircraftModel creation with invalid gross weight should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                mission,
                0,
                fuelCapacity,
                efficiency,
                maxSpeed,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Gross weight must be greater than 0");
    });

    test("AircraftModel creation with invalid fuel capacity should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                mission,
                grossWeight,
                0,
                efficiency,
                maxSpeed,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Fuel capacity must be greater than 0");
    });

    test("AircraftModel creation with invalid efficiency should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                mission,
                grossWeight,
                fuelCapacity,
                0,
                maxSpeed,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Efficiency must be greater than 0 and less than or equal to 1");
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                mission,
                grossWeight,
                fuelCapacity,
                1.1,
                maxSpeed,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Efficiency must be greater than 0 and less than or equal to 1");
    });

    test("AircraftModel creation with invalid max speed should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                mission,
                grossWeight,
                fuelCapacity,
                efficiency,
                0,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Max speed must be greater than 0");
    });

    test("AircraftModel creation with invalid max height should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                mission,
                grossWeight,
                fuelCapacity,
                efficiency,
                maxSpeed,
                0,
                maxWeight
            );
        }).toThrowError("Max height must be greater than 0");
    });

    test("AircraftModel creation with invalid max weight should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                mission,
                grossWeight,
                fuelCapacity,
                efficiency,
                maxSpeed,
                maxHeight,
                0
            );
        }).toThrowError("Max weight must be greater than 0");
    });

    test("AircraftModel creation with max weight less than gross weight should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                mission,
                grossWeight,
                fuelCapacity,
                efficiency,
                maxSpeed,
                maxHeight,
                10
            );
        }).toThrowError("Max weight must be greater than gross weight");
    });

    test("AircraftModel creation with empty category should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                [],
                proptype,
                propSubType,
                mission,
                grossWeight,
                fuelCapacity,
                efficiency,
                maxSpeed,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Aircraft must have at least one category");
    });

    test("AircraftModel creation with mission different from category should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                [AircraftMission.Attack],
                grossWeight,
                fuelCapacity,
                efficiency,
                maxSpeed,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Aircraft mission is not allowed for this category of aircraft");
    });

    test("AircraftModel creation with multiple missions, one from different category, should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                [AircraftMission.Transport, AircraftMission.Attack],
                grossWeight,
                fuelCapacity,
                efficiency,
                maxSpeed,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Aircraft mission is not allowed for this category of aircraft");
    });

    test("AircraftModel creation with multiple categories should be allowed", () => {
        expect(
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                [AircraftCategory.Civilian, AircraftCategory.Military],
                proptype,
                propSubType,
                [AircraftMission.Transport, AircraftMission.Attack],
                grossWeight,
                fuelCapacity,
                efficiency,
                maxSpeed,
                maxHeight,
                maxWeight
            )).toBeInstanceOf(AircraftModel);
    });

    test("AircraftModel creation with empty misison should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                category,
                proptype,
                propSubType,
                [],
                grossWeight,
                fuelCapacity,
                efficiency,
                maxSpeed,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Aircraft must have at least one mission");
    });

    test("AircraftModel creation with propType incompatible with subPropType should fail", () => {
        expect(() => {
            new AircraftModel(
                id,
                name,
                capacity,
                manufacturer,
                size,
                category,
                AircraftPropType.Glider,
                AircraftPropSubType.RamJet,
                mission,
                grossWeight,
                fuelCapacity,
                efficiency,
                maxSpeed,
                maxHeight,
                maxWeight
            );
        }).toThrowError("Aircraft prop subtype is not allowed for this proptype");
    });

    test("AircraftModel getters", () => {
        const aircraftModel = new AircraftModel(
            id,
            name,
            capacity,
            manufacturer,
            size,
            category,
            proptype,
            propSubType,
            mission,
            grossWeight,
            fuelCapacity,
            efficiency,
            maxSpeed,
            maxHeight,
            maxWeight
        );

        expect(aircraftModel.id).toBe(id);
        expect(aircraftModel.name).toBe(name);
        expect(aircraftModel.capacity).toBe(capacity);
        expect(aircraftModel.manufacturer).toBe(manufacturer);
        expect(aircraftModel.size).toBe(size);
        expect(aircraftModel.category).toBe(category);
        expect(aircraftModel.propType).toBe(proptype);
        expect(aircraftModel.propSubType).toBe(propSubType);
        expect(aircraftModel.availableMissions).toBe(mission);
        expect(aircraftModel.grossWeight).toBe(grossWeight);
        expect(aircraftModel.fuelCapacity).toBe(fuelCapacity);
        expect(aircraftModel.efficiency).toBe(efficiency);
        expect(aircraftModel.maxSpeed).toBe(maxSpeed);
        expect(aircraftModel.maxHeight).toBe(maxHeight);
        expect(aircraftModel.maxWeight).toBe(maxWeight);
    });

    test.todo("AircraftModel setters");
});