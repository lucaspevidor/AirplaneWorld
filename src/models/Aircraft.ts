import { AircraftModel } from "./AircraftModel";
import { Location } from "./Location";

/**
 * Represents an aircraft
 * @property {number} id - Unique ID of the aircraft.
 * @property {string} tailCode - The TailCode ID of the aircraft.
 * @property {AircraftModel} model - The model of the aircraft.
 * @property {number} year - The fabrication year of the aircraft.
 * @property {boolean} visible - Whether the aircraft is visible or not.
 * @property {Location} location - The location of the aircraft.
 */
export class Aircraft {
    private readonly _id: number;
    private _tailCode: string;
    private readonly _model: AircraftModel;
    private _year: number;
    
    public visible: boolean;
    public location: Location;

    /**
     * Creates an instance of Aircraft class.
     * @param id - Unique ID of the aircraft.
     * @param tailCode - The TailCode ID of the aircraft.
     * @param model - The model of the aircraft.
     * @param year - The fabrication year of the aircraft.
     * @throws {Error} If the tail code is empty.
     * @throws {Error} If the year is before 1903.
     */
    public constructor(
        id: number,
        tailCode: string,
        model: AircraftModel,
        year: number,
        visible = true,
        location: Location = new Location(0, 0)
    ) {
        this._id = id;
        this._tailCode = tailCode;
        this._model = model;
        this._year = year;
        this.visible = visible;
        this.location = location;

        if (tailCode === "")
            throw new Error("Tail code cannot be empty");
        if (year < 1903)
            throw new Error("Year cannot be before 1903");
    }

    /**
     * Gets the unique ID of the aircraft.
     */
    get id() { return this._id; }

    /**
     * Gets or sets the tail code of the aircraft.
     * @throws {Error} If the tail code is empty.
     */
    get tailCode() { return this._tailCode; }
    set tailCode(value: string) {
        if (value === "")
            throw new Error("Tail code cannot be empty");
        this._tailCode = value;
    }

    /**
     * Gets the model of the aircraft.
     */
    get model() { return this._model; }

    /**
     * Gets or sets the fabrication year of the aircraft.
     * @throws {Error} If the year is before 1903.
    */
    get year() { return this._year; }
    set year(value: number) {
        if (value < 1903)
            throw new Error("Year cannot be before 1903");
        this._year = value;
    }
}