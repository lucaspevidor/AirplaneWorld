import { AircraftModel, AircraftSpecs } from "../models/AircraftModel";

/**
 * Singleton class responsible for managing all the aircraft models in the application.
 * Has to be called using the GetInstance method.
 */
export class AircraftModelManager {
    private static _instance: AircraftModelManager;
    private _aircraftModels: {[id: number]: AircraftModel};
    private _lastKey;

    private constructor() {
        this._aircraftModels = {};
        this._lastKey = 0;
    }

    /**
     * Gets the instance of the AircraftModelManager class.
     * @returns Returns the instance of the AircraftModelManager singleton class.
     */
    static GetInstance() {
        if (!AircraftModelManager._instance)
            AircraftModelManager._instance = new AircraftModelManager();

        return AircraftModelManager._instance;
    }

    /**
     * Creates an aircraft model with a given name and specs.
     * @param modelName The name of the aircraft model
     * @param modelSpecs The specs of the aircraft model
     * @returns Returns the created aircraft model instance.
     */
    CreateAircraftModel(modelName: string, modelSpecs: AircraftSpecs): AircraftModel {
        const newId = this._lastKey;
        const aircraftModel = new AircraftModel(newId, modelName, modelSpecs);
        this._aircraftModels[newId] = aircraftModel;
        
        this._lastKey++;

        return aircraftModel;
    }

    /**
     * Removes the aircraft model instance.
     * @param model Aircraft model instance to be deleted.
     * @returns Returns true if the aircraft model is successfully deleted.
     */
    DeleteAircraftModel(model: AircraftModel): boolean {
        if (!(model.id in this._aircraftModels))
            return false;

        delete this._aircraftModels[model.id];
        return true;
    }

    /**
     * Removes the aircraft model instance with the given id.
     * @param id Aircraft model id to be deleted.
     * @returns Returns true if the aircraft model is successfully deleted.
     *          Returns false if it fails.
     */
    DeleteAircraftModelById(id: number): boolean {
        if (!(id in this._aircraftModels))
            return false;
        return this.DeleteAircraftModel(this._aircraftModels[id]);
    }

    /**
     * Gets the aircraft model instance with the given id.
     * @param id Aircraft model id to be retrieved.
     * @returns Returns the aircraft model instance with the given id.
     *          Returns undefined if it fails.
     */
    GetAircraftModel(id: number): AircraftModel | undefined {
        return this._aircraftModels[id];
    }

    /**
     * Gets all the aircraft model instances.
     * @returns Returns all the aircraft model instances.
     */
    GetAircraftModels(): AircraftModel[] {
        return Object.values(this._aircraftModels);
    }
}