import { test, expect, describe } from "vitest";
import { RunwayManager, RunwayInfo } from "../../../src/controllers/RunwayManager"; 
import { Runway } from "../../../src/models/Runway";

describe("RunwayManager", () => {
    test("RunwayManager creation", () => {
        const runwayManager = RunwayManager.GetInstance();
        expect(runwayManager).toBeDefined();
        expect(runwayManager.GetRunway(0)).toBeUndefined();
        expect(RunwayManager.GetInstance()).toStrictEqual(runwayManager);
    });

    const runwayManager = RunwayManager.GetInstance();

    test("RunwayManager CreateRunway", () => {
        const runway1 = runwayManager.CreateRunway("LAX", 1000, 30, 0); 
        const runway2 = runwayManager.CreateRunway("LAX", 1000, 30, 90);
        
        expect(runway1).toBeInstanceOf(Runway);
        expect(runway1.id).toEqual(0);
        expect(runway2.id).toEqual(1);        
    });

    test("RunwayManager CreateRunway with invalid parameter", () => {
        expect(() => runwayManager.CreateRunway("", 10, 10, 10)).toThrowError();
        expect(() => runwayManager.CreateRunway("LAX", 0, 10, 10)).toThrowError();
        expect(() => runwayManager.CreateRunway("LAX", 10, 0, 10)).toThrowError();
        expect(() => runwayManager.CreateRunway("LAX", 10, 10, -1)).toThrowError();
    });

    test("RunwayManager GetRunway", () => {
        const runway1 = runwayManager.GetRunway(0);
        const runway2 = runwayManager.GetRunway(1);

        expect(runway1).toBeInstanceOf(Runway);
        expect(runway2).toBeInstanceOf(Runway);
        expect(runwayManager.GetRunway(2)).toBeUndefined();

        if (!(runway1 && runway2))
            return;

        expect(runway1.id).toEqual(runway2.id - 1);
    });

    test("RunwayManager UpdateRunway", () => {
        const runway1 = runwayManager.GetRunway(0);
        expect(runway1).toBeInstanceOf(Runway);
        if (!runway1)
            throw new Error("runway1 is undefined");

        function testRunway(length: number, width: number, heading: number, number: number) {
            if (!runway1)
                return;
            expect(runway1.airportCode).toEqual("LAX");
            expect(runway1.id).toEqual(0);
            expect(runway1.length).toEqual(length);
            expect(runway1.width).toEqual(width);
            expect(runway1.heading).toEqual(heading);
            expect(runway1.number).toEqual(number);
        }
        
        testRunway(1000, 30, 0, 36);

        runwayManager.UpdateRunway(0, {length: 2000});
        testRunway(2000, 30, 0, 36);

        runwayManager.UpdateRunway(0, {width: 60});
        testRunway(2000, 60, 0, 36);

        runwayManager.UpdateRunway(0, {heading: 100});
        testRunway(2000, 60, 100, 10);

        runwayManager.UpdateRunway(0, {length: 1000, width: 30, heading: 0});
        testRunway(1000, 30, 0, 36);

        expect(runwayManager.UpdateRunway(0, {})).toBeTruthy();
        expect(runwayManager.UpdateRunway(2, {})).toBeFalsy();
    });

    test("RunwayManager DeleteRunway", () => {
        const runway1 = runwayManager.GetRunway(0);
        if (!runway1)
            throw new Error("runway1 is undefined");
        
        expect(runwayManager.DeleteRunway(runway1)).toBeTruthy();
        expect(runwayManager.DeleteRunway(runway1)).toBeFalsy();
        expect(runwayManager.GetRunway(0)).toBeUndefined();
        expect(runwayManager.GetRunway(1)).toBeInstanceOf(Runway);
    });

    test("RunwayManager DeleteRunwayById", () => {
        expect(runwayManager.GetRunway(1)).toBeInstanceOf(Runway);
        expect(runwayManager.DeleteRunwayById(1)).toBeTruthy();
        expect(runwayManager.DeleteRunwayById(1)).toBeFalsy();
        expect(runwayManager.GetRunway(1)).toBeUndefined();
    });
});