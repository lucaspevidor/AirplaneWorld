import {test, expect, describe} from "vitest";
import {AircraftCategory, AircraftMission, AircraftModel, AircraftPropSubType, AircraftPropType, AircraftSize, AircraftSpecs} from "../../../src/models/AircraftModel";

describe("AircraftModel", () => {
    const id = 0;
    const name = "747-800";
    const defaultSpecs: AircraftSpecs = {
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
    };

    describe("AircraftModel creation", () => {
        test("AircraftModel creation with valid parameters", () => {
            expect(new AircraftModel(
                id,
                name,
                defaultSpecs
            )).toBeInstanceOf(AircraftModel);
        });
    
        test("AircraftModel creation with invalid name should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    "",
                    defaultSpecs
                );
            }).toThrowError("Name cannot be empty");
        });
    
        test("AircraftModel creation with invalid capacity should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        capacity: -1
                    }
                );
            }).toThrowError("Capacity must be greater than 0");
        });
    
        test("AircraftModel creation with invalid manufacturer should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        manufacturer: ""
                    }
                );
            }).toThrowError("Manufacturer cannot be empty");
        });
    
        test("AircraftModel creation with invalid gross weight should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        grossWeight: 0
                    }
                );
            }).toThrowError("Gross weight must be greater than 0");
        });
    
        test("AircraftModel creation with invalid fuel capacity should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        fuelCapacity: 0
                    }
                );
            }).toThrowError("Fuel capacity must be greater than 0");
        });
    
        test("AircraftModel creation with invalid efficiency should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        efficiency: 0
                    }
                );
            }).toThrowError("Efficiency must be greater than 0 and less than or equal to 1");
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        efficiency: 1.1
                    }
                );
            }).toThrowError("Efficiency must be greater than 0 and less than or equal to 1");
        });
    
        test("AircraftModel creation with invalid max speed should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        maxSpeed: 0
                    }
                );
            }).toThrowError("Max speed must be greater than 0");
        });
    
        test("AircraftModel creation with invalid max height should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        maxHeight: 0
                    }
                );
            }).toThrowError("Max height must be greater than 0");
        });
    
        test("AircraftModel creation with invalid max weight should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        maxWeight: 0
                    }
                );
            }).toThrowError("Max weight must be greater than 0");
        });
    
        test("AircraftModel creation with max weight less than gross weight should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        maxWeight: 10
                    }
                );
            }).toThrowError("Max weight must be greater than gross weight");
        });
    
        test("AircraftModel creation with empty category should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        category: []
                    }
                );
            }).toThrowError("Aircraft must have at least one category");
        });
    
        test("AircraftModel creation with mission different from category should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        availableMissions: [AircraftMission.Attack]
                    }
                );
            }).toThrowError("Aircraft mission is not allowed for this category of aircraft");
        });
    
        test("AircraftModel creation with multiple missions, one from different category, should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        availableMissions: [AircraftMission.Transport, AircraftMission.Attack]
                    }
                );
            }).toThrowError("Aircraft mission is not allowed for this category of aircraft");
        });
    
        test("AircraftModel creation with multiple categories should be allowed", () => {
            expect(
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        category: [AircraftCategory.Civilian, AircraftCategory.Military],
                        availableMissions: [AircraftMission.Transport, AircraftMission.Attack]   
                    }
                )).toBeInstanceOf(AircraftModel);
        });
    
        test("AircraftModel creation with empty misison should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        availableMissions: []
                    }
                );
            }).toThrowError("Aircraft must have at least one mission");
        });
    
        test("AircraftModel creation with propType incompatible with subPropType should fail", () => {
            expect(() => {
                new AircraftModel(
                    id,
                    name,
                    {
                        ...defaultSpecs,
                        propType: AircraftPropType.Glider,
                        propSubType: AircraftPropSubType.RamJet
                    }
                );
            }).toThrowError("Aircraft prop subtype is not allowed for this proptype");
        });
    });

    describe("AircraftModel getters and setters with valid parameters", () => {
        test("AircraftModel getters", () => {
            const aircraftModel = new AircraftModel(
                id,
                name,
                defaultSpecs
            );

            expect(aircraftModel.id).toBe(id);
            expect(aircraftModel.name).toBe(name);
            expect(aircraftModel.capacity).toBe(defaultSpecs.capacity);
            expect(aircraftModel.manufacturer).toBe(defaultSpecs.manufacturer);
            expect(aircraftModel.size).toBe(defaultSpecs.size);
            expect(aircraftModel.category).toBe(defaultSpecs.category);
            expect(aircraftModel.propType).toBe(defaultSpecs.propType);
            expect(aircraftModel.propSubType).toBe(defaultSpecs.propSubType);
            expect(aircraftModel.availableMissions).toBe(defaultSpecs.availableMissions);
            expect(aircraftModel.grossWeight).toBe(defaultSpecs.grossWeight);
            expect(aircraftModel.fuelCapacity).toBe(defaultSpecs.fuelCapacity);
            expect(aircraftModel.efficiency).toBe(defaultSpecs.efficiency);
            expect(aircraftModel.maxSpeed).toBe(defaultSpecs.maxSpeed);
            expect(aircraftModel.maxHeight).toBe(defaultSpecs.maxHeight);
            expect(aircraftModel.maxWeight).toBe(defaultSpecs.maxWeight);
        });

        test("AircraftModel setters", () => {
            const aircraftModel = new AircraftModel(
                id,
                name,
                defaultSpecs
            );
            
            aircraftModel.name = "A-29";
            expect(aircraftModel.name).toEqual("A-29");
            aircraftModel.capacity = 2;
            expect(aircraftModel.capacity).toEqual(2);
            aircraftModel.manufacturer = "Embraer";
            expect(aircraftModel.manufacturer).toEqual("Embraer");
            aircraftModel.size = AircraftSize.Small;
            expect(aircraftModel.size).toEqual(AircraftSize.Small);
            aircraftModel.category = [AircraftCategory.Military, AircraftCategory.Civilian];
            expect(aircraftModel.category).toEqual([AircraftCategory.Military, AircraftCategory.Civilian]);
            aircraftModel.propType = AircraftPropType.SingleEngine;
            expect(aircraftModel.propType).toEqual(AircraftPropType.SingleEngine);
            aircraftModel.propSubType = AircraftPropSubType.TurboProp;
            expect(aircraftModel.propSubType).toEqual(AircraftPropSubType.TurboProp);
            aircraftModel.availableMissions = [AircraftMission.Attack, AircraftMission.Patrol];
            expect(aircraftModel.availableMissions).toEqual([AircraftMission.Attack, AircraftMission.Patrol]);
            aircraftModel.grossWeight = 29000;
            expect(aircraftModel.grossWeight).toEqual(29000);
            aircraftModel.fuelCapacity = 1000;
            expect(aircraftModel.fuelCapacity).toEqual(1000);
            aircraftModel.efficiency = 0.8;
            expect(aircraftModel.efficiency).toEqual(0.8);
            aircraftModel.maxSpeed = 500;
            expect(aircraftModel.maxSpeed).toEqual(500);
            aircraftModel.maxHeight = 25000;
            expect(aircraftModel.maxHeight).toEqual(25000);
            aircraftModel.maxWeight = 50000;
            expect(aircraftModel.maxWeight).toEqual(50000);
        });
    });

    describe("AircraftModel setters with invalid parameters", () => {
        const aircraftModel = new AircraftModel(
            0,
            "747-800",
            defaultSpecs
        );

        test("AircraftModel set name as empty string should fail", () => {
            expect(() => {aircraftModel.name = "";})
                .toThrowError("Name cannot be empty");
        });

        test("AircraftModel set capacity as 0 or less should fail", () => {
            expect(() => {aircraftModel.capacity = 0;})
                .toThrowError("");
            expect(() => {aircraftModel.capacity = -1;})
                .toThrowError("Capacity must be greater than 0");
        });

        test("AircraftModel set manufacturer as empty string should fail", () => {
            expect(() => {aircraftModel.manufacturer = "";})
                .toThrowError("Manufacturer cannot be empty");
        });

        test("AircraftModel set gross weight to 0 or less should fail", () => {
            expect(() => {aircraftModel.grossWeight = 0;})
                .toThrowError("");
            expect(() => {aircraftModel.grossWeight = -1;})
                .toThrowError("Gross weight must be greater than 0");
        });

        test("AircraftModel set fuel capacity to 0 or less should fail", () => {
            expect(() => {aircraftModel.fuelCapacity = 0;})
                .toThrowError("");
            expect(() => {aircraftModel.fuelCapacity = -1;})
                .toThrowError("Fuel capacity must be greater than 0");
        });

        test("AircraftModel set efficiency to 0 or less should fail", () => {
            expect(() => {aircraftModel.efficiency = 0;})
                .toThrowError("");
            expect(() => {aircraftModel.efficiency = -1;})
                .toThrowError("Efficiency must be greater than 0");
        });

        test("AircraftModel set efficiency to more than 1 should fail", () => {
            expect(() => {aircraftModel.efficiency = 1.1;})
                .toThrowError("Efficiency must be less than or equal to 1");
        });

        test("AircraftModel set max speed to 0 or less should fail", () => {
            expect(() => {aircraftModel.maxSpeed = 0;})
                .toThrowError("");
            expect(() => {aircraftModel.maxSpeed = -1;})
                .toThrowError("Max speed must be greater than 0");
        });

        test("AircraftModel set max height to 0 or less should fail", () => {
            expect(() => {aircraftModel.maxHeight = 0;})
                .toThrowError("");
            expect(() => {aircraftModel.maxHeight = -1;})
                .toThrowError("Max height must be greater than 0");
        });

        test("AircraftModel set max weight to 0 or less should fail", () => {
            expect(() => {aircraftModel.maxWeight = 0;})
                .toThrowError("");
            expect(() => {aircraftModel.maxWeight = -1;})
                .toThrowError("Max weight must be greater than 0");
        });

        test("AircraftModel set max weight to less than gross weight should fail", () => {
            expect(() => {aircraftModel.maxWeight = 10;})
                .toThrowError("Max weight must be greater than gross weight");
        });

        test("AircraftModel set empty category should fail", () => {
            expect(() => {aircraftModel.category = [];})
                .toThrowError("Aircraft must have at least one category");
        });

        test("AircraftModel set mission different from category should fail", () => {
            expect(() => {aircraftModel.availableMissions = [AircraftMission.Patrol];})
                .toThrowError("Aircraft mission is not allowed for this category of aircraft");
        });

        test("AircraftModel set multiple missions, one from different category, should fail", () => {
            expect(() => {aircraftModel.availableMissions = [AircraftMission.Transport, AircraftMission.Patrol];})
                .toThrowError("Aircraft mission is not allowed for this category of aircraft");
        });

        test("AircraftModel set empty misison should fail", () => {
            expect(() => {aircraftModel.availableMissions = [];})
                .toThrowError("Aircraft must have at least one mission");
        });

        test("AircraftModel set propSubType incompatible with propType should fail", () => {
            expect(() => {aircraftModel.propSubType = AircraftPropSubType.Glider;})
                .toThrowError("Aircraft prop subtype is not allowed for this proptype");
        });

    });
});