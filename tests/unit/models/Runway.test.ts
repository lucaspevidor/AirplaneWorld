import {describe, test, expect} from "vitest";
import { Runway } from "../../../src/models/Runway";

describe("Runway", () => {
    test("Runway creation", () => {
        const runway = new Runway(1, "LAX", 1000, 30, 1);
        expect(runway).toBeDefined();

        expect(runway.id).toEqual(1);
        expect(runway.airportCode).toStrictEqual("LAX");
        expect(runway.length).toEqual(1000);
        expect(runway.width).toEqual(30);
        expect(runway.heading).toEqual(1);
        expect(runway.number).toEqual(36);        
    });

    test("Runway creation with invalid parameters", () => {
        expect(() => new Runway(0, "", 1, 1, 1)).toThrowError("Airport code cannot be empty");
        expect(() => new Runway(0, "LAX", 0, 1, 1)).toThrowError("Runway length has to be bigger than 0m");
        expect(() => new Runway(0, "LAX", -1, 1, 1)).toThrowError("Runway length has to be bigger than 0m");
        expect(() => new Runway(0, "LAX", 1, 0, 1)).toThrowError("Runway width has to be bigger than 0m");
        expect(() => new Runway(0, "LAX", 1, -1, 1)).toThrowError("Runway width has to be bigger than 0m");
        expect(() => new Runway(0, "LAX", 1, 1, -1)).toThrowError("Heading has to be between 0 and 360 degrees");
        expect(() => new Runway(0, "LAX", 1, 1, 361)).toThrowError("Heading has to be between 0 and 360 degrees");
    });

    test("Runway update with invalid parameters", () => {
        const runway = new Runway(0, "LAX", 1, 1, 1);
        expect(() => runway.length=0).toThrowError("Runway length has to be bigger than 0m");
        expect(() => runway.length=-1).toThrowError("Runway length has to be bigger than 0m");
        expect(() => runway.width=0).toThrowError("Runway width has to be bigger than 0m");
        expect(() => runway.width=-1).toThrowError("Runway width has to be bigger than 0m");
        expect(() => runway.heading=361).toThrowError("Heading has to be between 0 and 360 degrees");
        expect(() => runway.heading=-1).toThrowError("Heading has to be between 0 and 360 degrees");
    });

    test("Runway number should update with heading change", () => {
        const runway = new Runway(0, "LAX", 1, 1, 0);
        expect(runway.number).toEqual(36);
        runway.heading = 1;
        expect(runway.number).toEqual(36);
        runway.heading = 120;
        expect(runway.number).toEqual(12);
        runway.heading = 129;
        expect(runway.number).toEqual(13);
        runway.heading = 360;
        expect(runway.number).toEqual(36);
    });
});
