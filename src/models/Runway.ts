/**
 * Represents a runway from an Airport.
 * @property {number} id 		- The unique ID of a runway.
 * @property {Airport} airport 	- The reference to the airport the runway belongs to.
 * @property {number} number	- The 2-digit number of the runway. Calculated automatically based on its heading.
 * @property {number} length	- The length of the runway in meters
 * @property {number} width		- The width of the runway in meters
 * @property {number} heading	- The heading of the runway in degrees
 */
export class Runway {
    private readonly _id: number;
    private readonly _airportCode: string;
    private _number: number;
    private _length: number;
    private _width: number;
    private _heading: number;

    /**
	 * Creates an instance of a runway.
	 * @param id The runway id. Has to be unique.
	 * @param airport The airport which the runway belongs to.
	 * @param length The runway length, in meters.
	 * @param width The runway width, in meters.
	 * @param heading The runway heading, in degrees.
	 */
    constructor(id: number, airportCode: string, length: number, width: number, heading: number) {
        if (length <= 0) {
            throw new Error("Runway length has to be bigger than 0m");
        }
        if (width <= 0) {
            throw new Error("Runway width has to be bigger than 0m");
        }
        if (heading < 0 || heading > 360)
        {
            throw new Error("Heading has to be between 0 and 360 degrees");
        }
		
        this._id = id;
        this._airportCode = airportCode;
        this._length = length;
        this._width = width;
        if (heading == 0) {
            this._heading = 360;
        } else {
            this._heading = heading;
        }
        this._number = Math.round(this._heading / 10);
    }

    /**
	 * Gets the unique ID of the runway.
	 */
    get id(): number { return this._id; }

    /**
	 * Gets the airport code which the runway belongs to
	 */
    get airportCode(): string { return this._airportCode; }

    /**
	 * Returns the number of the runway.
	 */
    get number(): number { return this._number; }
	
    /**
	 * Gets or sets the length of the runway, in meters.
	 */
    get length(): number { return this._length; }
    set length(value: number) {
        if (value <= 0) {
            throw new Error("Runway length has to be bigger than 0m");
        }
        this._length = value;
    }

    /**
	 * Gets or sets the width of the runway, in meters.
	 */
    get width(): number { return this._width; }
    set width(value: number) {
        if (value <= 0) {
            throw new Error("Runway width has to be bigger than 0m");
        }
        this._width = value;
    }

    /**
	 * Gets or sets the heading of the runway, in degrees.
	 */
    get heading(): number { return this._heading; }
    set heading(value: number) {
        if (value < 0 || value > 360) {
            throw new Error("Heading has to be between 0 and 360 degrees");
        }
        if (value == 0) {
            this._heading = 360;
        } else {
            this._heading = value;
        }

        this._number = Math.round(this._heading / 10);
    }
}