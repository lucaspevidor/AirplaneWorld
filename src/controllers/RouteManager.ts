import { Route } from "../models/Route";
import { AirportManager } from "./AirportManager";

/**
 * Singleton class responsible for managing all the routes in the application.
 * Has to be called using the GetInstance method
 */
export class RouteManager {
    private static _instance: RouteManager;
    private _routes: {[id: number]: Route};
    private _lastId: number;

    private constructor() {
        this._routes = {};
        this._lastId = 0;
    }

    /**
     * Gets the instance of the RouteManager class.
     * @returns Returns the instance of the RouteManager singleton class.
     */
    static GetInstance() {
        if (!RouteManager._instance) {
            RouteManager._instance = new RouteManager();
        }
        return RouteManager._instance;
    }

    /**
	 * Creates a route in a given airport
	 * @param originCode The unique code of the origin airport
	 * @param destinationCode The unique code of the destination airport
	 * @param alternateCode The unique code of the alternate destination airport
	 * @returns {Route | undefined} The created route.
	 */
    CreateRoute(originCode: string, destinationCode: string, alternateCode?: string): Route | undefined {
        const airportManager = AirportManager.GetInstance();
        if (airportManager.GetAirport(originCode) === undefined ||
            airportManager.GetAirport(destinationCode) === undefined ||
            alternateCode !== undefined && airportManager.GetAirport(alternateCode) === undefined)
        {
            return undefined;
        }

        const newId = this._lastId;
        const route = new Route(newId, originCode, destinationCode, alternateCode);
        this._routes[newId] = route;
        this._lastId++;
        return route;
    }

    /**
	 * Deletes a route given its instance.
	 * @param route The route instance to be deleted.
	 * @returns {boolean} Returns true if the route was correctly deleted.
	 */
    DeleteRoute(route: Route): boolean {
        if (!(route.id in this._routes))
            return false;

        delete this._routes[route.id];
        return true;
    }
    
    /**
	 * Deletes a route given its ID
	 * @param id The ID of the route to be deleted.
	 * @returns {boolean} Returns true if the route was correctly deleted. False if not.
	 */
    DeleteRouteById(id: number): boolean {
        if (!(id in this._routes))
            return false;
        return this.DeleteRoute(this._routes[id]);
    }
    
    /**
	 * Returns a route instance given its unique ID
	 * @param id The unique ID of the route.
	 * @returns {Route | null} Returns the route instance. Returns null if an invalid ID is provided.
	 */
    GetRoute(id: number): Route | undefined {
        return this._routes[id];
    }
}