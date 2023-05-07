import { describe, test, expect } from "vitest";
import { Route } from "../../../src/models/Route";
import { AirportManager } from "../../../src/controllers/AirportManager";
import { Location } from "../../../src/models/Location";

describe("Route", () => {
    const airportManager = AirportManager.GetInstance();
    const airport1 = airportManager.CreateAirport("LAX", new Location(0, 0));
    const airport2 = airportManager.CreateAirport("SBCF", new Location(0, 0));
    const airport3 = airportManager.CreateAirport("SBBH", new Location(0, 0));


    test("Route creation", () => {
        const route = new Route(1, airport1.code, airport2.code, airport3.code);
        expect(route).toBeInstanceOf(Route);
        expect(route.id).toEqual(1);
        expect(route.origin).toEqual(airport1.code);
        expect(route.destination).toEqual(airport2.code);
        expect(route.alternate).toEqual(airport3.code);
    });

    test("Route creation with undefined alternate", () => {
        const route = new Route(2, airport1.code, airport2.code);
        expect(route).toBeInstanceOf(Route);
        expect(route.id).toEqual(2);
        expect(route.origin).toEqual(airport1.code);
        expect(route.destination).toEqual(airport2.code);
        expect(route.alternate).toBeUndefined();
    });
});