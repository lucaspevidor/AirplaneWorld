import {describe, expect, test} from "vitest";
import { Location } from "../../../src/models/Location";

describe("Location", () => {
    test("Location creation", () => {
        const location = new Location(10, 20);
        
        expect(location).toBeDefined();
        expect(location.lat).toEqual(10);
        expect(location.lon).toEqual(20);

        location.lat = 90;
        location.lon = -180;
        
        expect(location.lat).toEqual(90);
        expect(location.lon).toEqual(-180);

        location.lat = -90;
        location.lon = 180;

        expect(location.lat).toEqual(-90);
        expect(location.lon).toEqual(180);
    });

    test("Location creation with invalid parameters", () => {
        expect(() => {new Location(300, 300);})
            .toThrowError("Latitude coordinates have to be between -90 and 90 degrees");
        expect(() => {new Location(95, 0);})
            .toThrowError("Latitude coordinates have to be between -90 and 90 degrees");
        expect(() => {new Location(-95, 0);})
            .toThrowError("Latitude coordinates have to be between -90 and 90 degrees");
        expect(() => {new Location(0, 300);})
            .toThrowError("Longitude coordinates have to be between -180 and 180 degrees");
        expect(() => {new Location(0, -300);})
            .toThrowError("Longitude coordinates have to be between -180 and 180 degrees");
    });

    test("Location lat-lon change with invalid parameters", () => {
        const loc = new Location(0, 0);
        expect(() => loc.lat = 91).toThrowError();
        expect(() => loc.lat = -91).toThrowError();
        expect(() => loc.lon = 181).toThrowError();
        expect(() => loc.lon = -181).toThrowError();
    });

});