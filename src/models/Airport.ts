import { injectable, inject } from "inversify";
import { IAirport } from "./Airport.interface";
import { ILocation } from "./Location.interface";

/**
 * Represents an Airport
 * @property {string} code          - The airport unique code.
 * @property {ILocation} location   - The airport lat-lon location.
 * @property {number[]} runways     - An array with the airport runways IDs.
 */
@injectable()
export class Airport implements IAirport {
    private readonly _code: string;
    private _location: ILocation;
    private _runways: number[];

    /**
     * Creates an instance of an Airport.
     * @param code - The airport unique code.
     * @param location - The airport lat-lon location.
     * @throws {Error} If the provided code is empty.
     */
    constructor(code: string, @inject("ILocation") location: ILocation) {
        if (code === "")
            throw new Error("Airport code cannot be empty");
        this._code = code;
        this._location = location;
        this._runways = [];
    }

    /**
     * Gets the airport code.
     * @returns {string} The airport code.
     */
    get code(): string { return this._code; }

    /**
     * Gets or sets the airport location.
     * @returns {ILocation} The airport location.
     */
    get location(): ILocation { return this._location; }
    set location(location: ILocation) { this._location = location; }

    /**
     * Gets the airport runways.
     * @returns {number[]} An array containing the airport runways.
    */
    get runways(): number[] { return this._runways; }
    set runways(runways: number[]) { this._runways = runways; }
}