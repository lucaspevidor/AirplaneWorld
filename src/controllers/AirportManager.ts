import { Airport } from "../models/Airport";
import { Location } from "../models/Location";
import { RunwayManager } from "./RunwayManager";

/**
 * Singleton class responsible for managing all the airports in the application.
 * Has to be called using the GetInstance method.
 */
export class AirportManager {
    private static _instance: AirportManager;
    private _airports: {[code: string]: Airport};

    private constructor() {
        this._airports = {};
    }

    /**
     * Gets the instance of the AirportManager class.
     * @returns Returns the instance of the AirportManager singleton class.
     */
    static GetInstance() {
        if (!AirportManager._instance) {
            AirportManager._instance = new AirportManager();
        }
        return AirportManager._instance;
    }

    /**
     * Creates an aiport with a given code and location.
     * @param code The airport unique ID code
     * @param location Lat-Lon location of the airport
     * @returns Returns true if the airport is created successfully.
     *          Returns false if an airport with the provided code already exists.
     */
    CreateAirport(code: string, location: Location): boolean {
        if (code in this._airports) {
            return false;
        }

        const airport = new Airport(code, location);
        this._airports[code] = airport;
        return true;
    }

    /**
     * Removes the airport instance.
     * @param airport Airport instance to be deleted.
     * @returns Returns true if the airport is successfully deleted.
     *          Returns false if it fails.
     */
    DeleteAirport(airport: Airport): boolean {
        if (!(airport.code in this._airports))
            return false;

        for (const runway of airport.runways)
            this.RemoveRunwayFromAirport(airport.code, runway);
        
        delete this._airports[airport.code];
        return true;
    }

    /**
     * Deletes an airport with a given code.
     * @param code The unique code of the airport to be deleted
     * @returns Returns true if the airport is successfully deleted.
     *          Returns false if an aiport with the given code doesn't exists.
     */
    DeleteAirportByCode(code: string): boolean {
        if (!(code in this._airports))
            return false;
        const airport = this._airports[code];
        return this.DeleteAirport(airport);
    }

    /**
     * Returns an airport instance with the given code.
     * @param code The unique code of the airport.
     * @returns The airport instance if it exists. Returns null if it doesnt.
     */
    GetAirport(code: string): Airport | null {
        return this._airports[code];
    }

    /**
     * Updates an airport with a new location
     * @param code The unique code of the airport to be updated.
     * @param location The new location of the airport
     * @returns Returns true if the airport is updated successfully.
     *          Returns false if the aiport doesn't exists.
     */
    UpdateAirportLocation(code: string, location: Location): boolean {
        if (!(code in this._airports)) 
            return false;
        this._airports[code].location = location;
        return true;
    }

    /**
     * Adds a runway to an airport.
     * @param airportCode The unique code of the airport the runway will be added to.
     * @param length The length of the runway, in meters.
     * @param width The width of the runway, in meters.
     * @param heading The heading of the runway, in degrees.
     * @returns Returns true if the runway is created successfully. False if an error happens.
     */
    AddRunwayToAirport(airportCode: string, length: number, width: number, heading: number) : boolean {
        const airport = this.GetAirport(airportCode);
        if (!airport)
            return false;
        
        const runway = RunwayManager.GetInstance().CreateRunway(airportCode, length, width, heading);
        if (!runway)
            return false;

        airport.runways.push(runway.id);
        return true;
    }

    /**
     * Removes a runway from an airport.
     * @param airportCode The code of the airport the runway will be removed from.
     * @param runwayId The unique Id of the runway to be removed.
     * @returns Returns true if the runway is removed successfully. False if not.
     */
    RemoveRunwayFromAirport(airportCode: string, runwayId: number) : boolean {
        const airport = this.GetAirport(airportCode);
        if (!airport || !(runwayId in airport.runways))
            return false;

        if (!RunwayManager.GetInstance().DeleteRunwayById(runwayId))
            return false;
        
        airport.runways = airport.runways.filter(item => item !== runwayId);
        return true;
    }
}