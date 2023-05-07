import { expect, describe, test } from "vitest";
import { RouteManager } from "../../../src/controllers/RouteManager";
import { AirportManager } from "../../../src/controllers/AirportManager";
import { Location } from "../../../src/models/Location";
import { Route } from "../../../src/models/Route";


describe("RouteManager", () => {
    test("RouteManager creation", () => {
        const routeManager = RouteManager.GetInstance();
        expect(routeManager).toBeDefined();
        expect(routeManager.GetRoute(0)).toBeUndefined();
        expect(RouteManager.GetInstance()).toStrictEqual(routeManager);
    });

    const airportManager = AirportManager.GetInstance();
    const routeManager = RouteManager.GetInstance();

    airportManager.CreateAirport("LAX", new Location(0,0));
    airportManager.CreateAirport("SBCF", new Location(0,0));
    airportManager.CreateAirport("SBBH", new Location(0,0));

    test("CreateRoute", () => {
        const route1 = routeManager.CreateRoute("SBCF", "LAX"); 
        const route2 = routeManager.CreateRoute("LAX", "SBCF", "SBBH");
        
        expect(route1).toBeInstanceOf(Route);        
        expect(route2).toBeInstanceOf(Route);
        
        expect(route1?.id).toEqual(0);
        expect(route2?.id).toEqual(1);

        expect(route1?.origin).toEqual("SBCF");
        expect(route1?.destination).toEqual("LAX");
        expect(route1?.alternate).toBeUndefined();

        expect(route2?.origin).toEqual("LAX");
        expect(route2?.destination).toEqual("SBCF");
        expect(route2?.alternate).toEqual("SBBH");
    });

    test("CreateRoute with invalid parameter should fail", () => {
        expect(routeManager.CreateRoute("SBNF", "LAX")).toBeFalsy();
        expect(routeManager.CreateRoute("SBCF", "SBNF")).toBeFalsy();
        expect(routeManager.CreateRoute("LAX", "SBCF", "SBNF")).toBeFalsy();
    });

    test("GetRoute", () => {
        const route1 = routeManager.GetRoute(0);
        const route2 = routeManager.GetRoute(1);

        expect(route1).toBeInstanceOf(Route);
        expect(route2).toBeInstanceOf(Route);
        expect(routeManager.GetRoute(2)).toBeUndefined();

        if (!(route1 && route2))
            return;

        expect(route1.id).toEqual(route2.id - 1);
    });

    test("DeleteRoute", () => {
        const route1 = routeManager.GetRoute(0);
        if (!route1)
            throw new Error("runway1 is undefined");
        
        expect(routeManager.DeleteRoute(route1)).toBeTruthy();
        expect(routeManager.DeleteRoute(route1)).toBeFalsy();
        expect(routeManager.GetRoute(0)).toBeUndefined();
        expect(routeManager.GetRoute(1)).toBeInstanceOf(Route);
    });

    test("DeleteRouteById", () => {
        expect(routeManager.GetRoute(1)).toBeInstanceOf(Route);
        expect(routeManager.DeleteRouteById(1)).toBeTruthy();
        expect(routeManager.DeleteRouteById(1)).toBeFalsy();
        expect(routeManager.GetRoute(1)).toBeUndefined();
    });
});