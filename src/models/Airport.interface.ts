import { ILocation } from "./Location.interface";

/**
 * Represents an Airport
 * @property {string} code          - The airport unique code.
 * @property {ILocation} location    - The airport lat-lon location.
 * @property {number[]} runways     - An array with the airport runways IDs.
 */
export interface IAirport {
    readonly code: string;
    location: ILocation;
    runways: number[];
}