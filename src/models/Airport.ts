import { Location } from "./Location";

/**
 * Represents an Airport
 * @property {string} code          - The airport unique code.
 * @property {Location} location    - The airport lat-lon location.
 * @property {number[]} runways     - An array with the airport runways IDs.
 */
export class Airport {
    public readonly code: string;
    public location: Location;
    public runways: number[];

    constructor(code: string, location: Location) {
        if (code === "")
            throw new Error("Airport code cannot be empty");
        this.code = code;
        this.location = location;
        this.runways = [];
    }
}