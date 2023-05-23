import { Aircraft } from "../models/Aircraft";
import { AircraftModel } from "../models/AircraftModel";
import { Location } from "../models/Location";

/**
 * Singleton class responsible for managing all the aircrafts in the application.
 * Has to be called using the GetInstance method.
 */
export class AircraftManager {
    private static _instance: AircraftManager;
    private _aircrafts: {[id: number]: Aircraft};
    private _lastId;

    private constructor() {
        this._aircrafts = {};
        this._lastId = 0;
    }

    /**
     * Gets the instance of the AircraftManager class.
     * @returns Returns the instance of the AircraftManager singleton class.
     */
    static GetInstance() {
        if (!AircraftManager._instance)
            AircraftManager._instance = new AircraftManager();

        return AircraftManager._instance;
    }

    /**
     * Creates an aircraft with a given tail code, model, year and location.
     * @param tailCode The tail code of the aircraft
     * @param model The model of the aircraft
     * @param year The year of the aircraft
     * @param loc The location of the aircraft
     * @returns Returns the created aircraft instance.
     */
    CreateAircraft(tailCode: string, model: AircraftModel, year: number, loc: Location): Aircraft {        
        const aircraft = new Aircraft(this._lastId, tailCode, model, year, true, loc);
        this._aircrafts[this._lastId] = aircraft;
        this._lastId++;

        return aircraft;
    }

    /**
     * Removes the aircraft instance.
     * @param aircraft Aircraft instance to be deleted.
     * @returns Returns true if the aircraft is successfully deleted.
     *          Returns false if it fails.
     */
    DeleteAircraft(aircraft: Aircraft): boolean {
        if (!(aircraft.id in this._aircrafts))
            return false;
        
        delete this._aircrafts[aircraft.id];
        return true;
    }

    /**
     * Removes the aircraft instance with the given id.
     * @param id Aircraft id to be deleted.
     * @returns Returns true if the aircraft is successfully deleted.
     *          Returns false if it fails.
     */
    DeleteAircraftById(id: number): boolean {
        if (!(id in this._aircrafts))
            return false;

        return this.DeleteAircraft(this._aircrafts[id]);
    }

    /**
     * Gets the aircraft instance with the given id.
     * @param id Aircraft id to be retrieved.
     * @returns Returns the aircraft instance with the given id.
     *          Returns undefined if it fails.
     */
    GetAircraft(id: number) {
        return this._aircrafts[id];
    }
}