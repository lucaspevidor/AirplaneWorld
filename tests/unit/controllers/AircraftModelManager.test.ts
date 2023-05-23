import { describe, test, expect } from "vitest";

import { AircraftModelManager } from "../../../src/controllers/AircraftModelManager";
import { AircraftSpecs, AircraftSize, AircraftCategory, AircraftPropSubType, AircraftPropType, AircraftMission, AircraftModel } from "../../../src/models/AircraftModel";

describe("AircraftModelManager", () => {
    test("AircraftModelManager creation", () => {
        const amm = AircraftModelManager.GetInstance();
        expect(amm).toBeInstanceOf(AircraftModelManager);
        expect(AircraftModelManager.GetInstance()).toStrictEqual(amm);
    });

    const amm = AircraftModelManager.GetInstance();
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

    test("AircraftModelManager ModelCreation", () => {
        const aircraft1 = amm.CreateAircraftModel("F16", specs1);
        const aircraft2 = amm.CreateAircraftModel("F35", specs2);

        expect(aircraft1).toBeInstanceOf(AircraftModel);
        expect(aircraft2).toBeInstanceOf(AircraftModel);

        expect(aircraft1.id).toEqual(0);
        expect(aircraft2.id).toEqual(1);
    });

    test("AircraftModelManager GetModel", () => {
        const aircraft1 = amm.GetAircraftModel(0);
        const aircraft2 = amm.GetAircraftModel(1);

        console.log(amm.GetAircraftModels());

        expect(aircraft1).toBeInstanceOf(AircraftModel);
        expect(aircraft2).toBeInstanceOf(AircraftModel);
        expect(aircraft1?.id).toEqual(0);
        expect(aircraft2?.id).toEqual(1);

        const aircraft3 = amm.GetAircraftModel(3);
        expect(aircraft3).toBeUndefined();
    });

    test("AircraftModelManager GetModels", () => {
        const models = amm.GetAircraftModels();
        expect(models.length).toEqual(2);
        expect(models[0]).toBeInstanceOf(AircraftModel);
        expect(models[0].id).toEqual(0);
    });

    test("AircraftModelManager DeleteModel", () => {
        const aircraft = amm.GetAircraftModel(0);
        if (!aircraft)
            throw new Error("Aircraft model is undefined");
        expect(amm.DeleteAircraftModel(aircraft)).toBeTruthy;        
        expect(amm.GetAircraftModel(0)).toBeUndefined();
    });

    test("AircraftModelManager DeleteModelById", () => {
        expect(amm.DeleteAircraftModelById(1)).toBeTruthy();
        expect(amm.DeleteAircraftModelById(2)).toBeFalsy();

        expect(amm.GetAircraftModel(1)).toBeUndefined();
    });

    test("AircraftModelManager CreationAfterDeletion", () => {
        const aircraft = amm.CreateAircraftModel("F35", specs2);
        expect(aircraft.id).toEqual(2);
    });
});