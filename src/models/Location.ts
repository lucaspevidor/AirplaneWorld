/**
 * Represents a point on a map using Lat-Lon coordinates
 * @property {number} lat - Latitude
 * @property {number} lon - Longitude 
**/
export class Location {
    private _lat: number;
    private _lon: number;

    /**
	 * Creates an instance of a Lat-Lon coordinate
	 * @param lat Latitude coordinate
	 * @param lon Longitude coordinate
	 */
    constructor(lat: number, lon: number) {
        this._lat = this.ValidateLat(lat);
        this._lon = this.ValidateLon(lon);
    }
	
    /**
	 * Checks if the provided latitude coordinate is between -90 and 90 degrees.
	 * Throws an error in case it is not.
	 * @param lat Latitude coordinate to be validated.
	 * @returns The validated latitude coordinate.
     * @throws {Error} If the provided latitude is not between -90 and 90 degrees.
	 */
    private ValidateLat(lat: number): number {
        if (lat < -90 || lat > 90)
            throw new Error("Latitude coordinates have to be between -90 and 90 degrees");
        return lat;
    }

    /**
	 * Checks if the provided longitude coordinate is between -180 and 180 degrees.
	 * Throws an error in case it is not.
	 * @param lon Longitude coordinate to be validated.
	 * @returns The validated longitude coordinate.
     * @throws {Error} If the provided longitude is not between -180 and 180 degrees.
	 */
    private ValidateLon(lon:number): number {
        if (lon < -180 || lon > 180)
            throw new Error("Longitude coordinates have to be between -180 and 180 degrees");
        return lon;
    }

    /**
	 * Gets or sets the longitude property.
	 * Longitude has to be between -180 and 180 degrees.
     * @throws {Error} If the provided longitude is not between -180 and 180 degrees.
	 */
    get lon(): number { return this._lon; }
    set lon(value: number) {
        this._lon = this.ValidateLon(value);
    }

    /**
	 * Gets or sets the latitude property.
	 * Latitude has to be between -90 and 90 degrees.
     * @throws {Error} If the provided latitude is not between -90 and 90 degrees.
	 */
    get lat(): number { return this._lat; }
    set lat(value: number) {
        this._lat = this.ValidateLat(value);
    }
}