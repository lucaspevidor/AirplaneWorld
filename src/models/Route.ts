import { Airport } from "./Airport";

/**
 * Represents a route airplanes can follow
 * @property {number} id - Unique ID of the route
 * @property {Airport} origin - Route's origin airport
 * @property {Airport} destination - Route's destination airport
 * @property {Airport | undefined} alternate - Route's alternative destination airport
 */
export class Route {
    public readonly id: number;
    public readonly origin: Airport;
    public readonly destination: Airport;
    public readonly alternate?: Airport;

    /**
     * Creates an instance of the route class
     * @param id Unique ID of the route
     * @param origin Origin airport of the route
     * @param destination Destination airport of the route
     */
    constructor(id: number, origin: Airport, destination: Airport, alternate?: Airport) {
        this.id = id;
        this.origin = origin;
        this.destination = destination;        
        this.alternate = alternate;
    }
}