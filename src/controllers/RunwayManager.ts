import { Runway } from "../models/Runway";
/**
 * Describes runway information
 * @typedef {Object} RunwayInfo
 * @property {number | null} length - The runway length, in meters.
 * @property {width | null} width - The runway width, in meters.
 * @property {heading | null} heading - The runway heading, in degrees (0 to 360).
 */
export type RunwayInfo = {
	length?: number;
	width?: number;
	heading?: number;
}

/**
 * Singleton class responsible for managing all the runways in the application.
 * Has to be called using the GetInstance method
 */
export class RunwayManager {
    private static instance: RunwayManager;
    private _runways: {[id: number]: Runway };

    private constructor() {		
        this._runways = {};
    }

    /**
	 * Gets the instance of the RunwayManager class.
	 * @returns {RunwayManager} Returns the instance of the RunwayManager singleton class
	 */
    static GetInstance(): RunwayManager {
        if (!RunwayManager.instance) {
            RunwayManager.instance = new RunwayManager();
        }
        return RunwayManager.instance;
    }

    /**
	 * Creates a runway in a given airport
	 * @param airportCode The unique ID code of the airport in which the runway will be created.
	 * @param length The length of the runway, in meters.
	 * @param width The width fo the runway, in meters.
	 * @param heading The heading of the runway, in degrees.
	 * @returns {Runway} The created runway.
	 */
    CreateRunway(airportCode: string, length: number, width: number, heading: number): Runway {
        const newId = Object.keys(this._runways).length;
        const runway = new Runway(newId, airportCode, length, width, heading);
        this._runways[newId] = runway;

        return runway;
    }

    /**
	 * Deletes a runway given its instance.
	 * @param runway The runway instance to be deleted.
	 * @returns {boolean} Returns true if the runway was correctly deleted.
	 */
    DeleteRunway(runway: Runway): boolean {
        if (!(runway.id in this._runways))
            return false;
        delete this._runways[runway.id];
        return true;
    }

    /**
	 * Deletes a runway given its ID
	 * @param id The ID of the runway to be deleted.
	 * @returns {boolean} Returns true if the runway was correctly deleted. False if not.
	 */
    DeleteRunwayById(id: number): boolean {
        if (!(id in this._runways))
            return false;    
        return this.DeleteRunway(this._runways[id]);	
    }

    /**
	 * Returns a runway instance given its unique ID
	 * @param id The unique ID of the runway.
	 * @returns {Runway | null} Returns the runway instance. Returns null if an invalid ID is provided.
	 */
    GetRunway(id: number): Runway | undefined {
        return this._runways[id];
    }

    /**
	 * Updates a runway with a given information
	 * @param {number} id The runway ID to be updated
	 * @param {RunwayInfo} info An object containing the runway information to be updated.
	 * @returns {boolean} Returns true if the information was updated successfully.
	 * 					  False if there's an error or the provided ID is invalid
	 */
    UpdateRunway(id: number, info: RunwayInfo): boolean {
        if (!(id in this._runways)) {
            return false;
        }
        const runway = this._runways[id];

        runway.length = info.length !== undefined ? info.length : runway.length;
        runway.width = info.width !== undefined ? info.width : runway.width;
        runway.heading = info.heading !== undefined ? info.heading : runway.heading;

        return true;
    }
}