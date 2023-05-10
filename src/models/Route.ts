import { injectable } from "inversify";
import { IRoute } from "./Route.interface";

/**
 * Represents a route airplanes can follow
 * @property {number} id - Unique ID of the route
 * @property {string} origin - Route's origin airport unique code
 * @property {string} destination - Route's destination airport unique code
 * @property {string | undefined} alternate - Route's alternative destination airport unique code
 */
@injectable()
export class Route implements IRoute {
    public readonly id: number;
    public readonly origin: string;
    public readonly destination: string;
    public readonly alternate?: string;

    /**
     * Creates an instance of the route class
     * @param id Unique ID of the route
     * @param origin Origin airport of the route
     * @param destination Destination airport of the route
     */
    constructor(id: number, origin: string, destination: string, alternate?: string) {
        this.id = id;
        this.origin = origin;
        this.destination = destination;        
        this.alternate = alternate;
    }
}