import { describe, expect, test } from "vitest";

import { Airport } from "../../../src/models/Airport";
import { Location } from "../../../src/models/Location";

describe("Airport", () => {
    const location = new Location(10, 10);

    test("Airport creation", () => {
        const airport = new Airport("LAX", location);
        expect(airport).toBeDefined();
        expect(airport.code).toEqual("LAX");
        expect(airport.runways.length).toEqual(0);
        expect(airport.location).toStrictEqual(location);
    });

    test("Airport creation with invalid code", () => {
        expect(() => new Airport("", location)).toThrowError();
    });

    const airport = new Airport("LAX", new Location(0, 0));
    test("Airport runway management", () => {
        expect(airport.runways.length).toEqual(0);
        airport.runways.push(12);
        airport.runways.push(30);
        expect(airport.runways).toContain(12);
        expect(airport.runways).toContain(30);
        airport.runways.splice(1, 1);
        expect(airport.runways).toContain(12);
        airport.runways.splice(0,1);
        expect(airport.runways.length).toBe(0);
    });
});
