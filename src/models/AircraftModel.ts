/**
 * Represents the aircraft propulsion type.
 * @enum {string}
 */
export enum AircraftPropType {
    SingleEngine = "Single engine",
    MultiEngine = "Multi engine",
    Glider = "Glider",
    Helicopter = "Helicopter",
    LighterThanAir = "Lighter than air"
}

/**
 * Represents the aircraft propulsion sub type.
 * @enum {string}
 */
export enum AircraftPropSubType {
    Piston = "Piston",
    TurboProp = "Turbo prop",
    TurboShaft = "Turbo shaft",
    TurboJet = "Turbo jet",
    TurboFan = "Turbo fan",
    RamJet = "Ram jet",
    Rocket = "Rocket",
    GroundEffect = "Ground effect",
    Amphibian = "Amphibian",
    TiltWing = "Tilt wing",
    TailSitter = "Tail sitter",
    TiltRotor = "Tilt rotor",
    Glider = "Glider",
    Parafoil = "Parafoil",
    Paraglider = "Paraglider",
    HangGlider = "Hang glider",
    Baloon = "Baloon",
    Airship = "Airship",
    Gyrocopter = "Gyrocopter",
    Ornithopter = "Ornithopter",
    Uav = "Uav",
    Space = "Space"
}

/**
 * Represents the aircraft propulsion restrictions between type and subtype.
 * @type {Object<AircraftPropType, AircraftPropSubType[]>}
 */
export const AicraftPropRestrictions = {
    [AircraftPropType.SingleEngine]: [
        AircraftPropSubType.Piston,
        AircraftPropSubType.TurboJet,
        AircraftPropSubType.TurboFan,
        AircraftPropSubType.TurboProp,
        AircraftPropSubType.RamJet,
        AircraftPropSubType.Rocket,
        AircraftPropSubType.GroundEffect,
        AircraftPropSubType.Amphibian,
        AircraftPropSubType.TiltWing,
        AircraftPropSubType.TailSitter,
        AircraftPropSubType.TiltRotor,
        AircraftPropSubType.Ornithopter,
        AircraftPropSubType.Uav,
        AircraftPropSubType.Space
    ],
    [AircraftPropType.MultiEngine]: [
        AircraftPropSubType.Piston,
        AircraftPropSubType.TurboProp,
        AircraftPropSubType.TurboJet,
        AircraftPropSubType.TurboFan,
        AircraftPropSubType.RamJet,
        AircraftPropSubType.Rocket,
        AircraftPropSubType.GroundEffect,
        AircraftPropSubType.Amphibian,
        AircraftPropSubType.TiltWing,
        AircraftPropSubType.TailSitter,
        AircraftPropSubType.TiltRotor,
        AircraftPropSubType.Ornithopter,
        AircraftPropSubType.Uav,
        AircraftPropSubType.Space
    ],
    [AircraftPropType.Helicopter]: [
        AircraftPropSubType.Piston,
        AircraftPropSubType.TurboShaft,
        AircraftPropSubType.Gyrocopter,
    ],
    [AircraftPropType.Glider]: [
        AircraftPropSubType.Glider,
        AircraftPropSubType.Parafoil,
        AircraftPropSubType.Paraglider,
        AircraftPropSubType.HangGlider
    ],
    [AircraftPropType.LighterThanAir]: [
        AircraftPropSubType.Baloon,
        AircraftPropSubType.Airship
    ]
};

/**
 * Represents the aircraft category.
 * @enum {string}
 */
export enum AircraftCategory {
    Civilian = "Civilian",
    Military = "Military"
}

/**
 * Represents the aircraft mission.
 * @enum {string}
 */
export enum AircraftMission {
    Transport = "Transport",
    Attack = "Attack",
    Bomber = "Bomber",
    Fighter = "Fighter",
    Recoinessance = "Recoinessance",
    Patrol = "Patrol",
    Trainer = "Trainer",
    Experimental = "Experimental",
    Mail = "Mail",
    Cargo = "Cargo",
    Rescue = "Rescue",
    Firefighting = "Firefighting",
    Bush = "Bush",
    Sport = "Sport",
    Awacs = "Awacs",
    Tanker = "Tanker",
    Recreational = "Recreational",
    Agricultural = "Agricultural",
    Research = "Research"
}

/**
 * Represents the aircraft mission restrictions between category and mission.
 * @type {Object<AircraftCategory, AircraftMission[]>}
 */
export const AircraftMissionRestrictions = {
    [AircraftCategory.Civilian]: [
        AircraftMission.Transport,
        AircraftMission.Trainer,
        AircraftMission.Experimental,
        AircraftMission.Mail,
        AircraftMission.Cargo,
        AircraftMission.Rescue,
        AircraftMission.Firefighting,
        AircraftMission.Bush,
        AircraftMission.Sport,
        AircraftMission.Recreational,
        AircraftMission.Agricultural,
        AircraftMission.Research
    ],
    [AircraftCategory.Military]: [
        AircraftMission.Attack,
        AircraftMission.Bomber,
        AircraftMission.Fighter,
        AircraftMission.Recoinessance,
        AircraftMission.Patrol,
        AircraftMission.Trainer,
        AircraftMission.Experimental,
        AircraftMission.Cargo,
        AircraftMission.Rescue,
        AircraftMission.Firefighting,
        AircraftMission.Awacs,
        AircraftMission.Tanker,
        AircraftMission.Research
    ]
};

/**
 * Represents the aircraft size.
 * @enum {string}
 */
export enum AircraftSize {
    VerySmall = "Very small",
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    VeryLarge = "Very large"
}

/**
 * Contains the aircraft characteristics.
 * @interface
 * @property {number} capacity - The capacity of the aircraft.
 * @property {string} manufacturer - The manufacturer of the aircraft.
 * @property {AircraftSize} size - The size of the aircraft.
 * @property {AircraftCategory[]} category - The category of the aircraft.
 * @property {AircraftPropType} propType - The propulsion type of the aircraft.
 * @property {AircraftPropSubType} propSubType - The propulsion subtype of the aircraft.
 * @property {AircraftMission[]} availableMissions - The available missions of the aircraft.
 * @property {number} grossWeight - The gross weight of the aircraft.
 * @property {number} fuelCapacity - The fuel capacity of the aircraft.
 * @property {number} efficiency - The efficiency of the aircraft.
 * @property {number} maxSpeed - The maximum speed of the aircraft.
 * @property {number} maxHeight - The maximum height of the aircraft.
 * @property {number} maxWeight - The maximum weight of the aircraft. 
 */
export interface AircraftSpecs {
    capacity: number,
    manufacturer: string,
    size: AircraftSize,
    category: AircraftCategory[],
    propType: AircraftPropType,
    propSubType: AircraftPropSubType,
    availableMissions: AircraftMission[],
    grossWeight: number,
    fuelCapacity: number,
    efficiency: number,
    maxSpeed: number,
    maxHeight: number,
    maxWeight: number
}

/**
 * Represents the aircraft model.
 * @class
 * @property {number} id - The unique ID of the aircraft model.
 * @property {string} name - The name of the aircraft.
 * @property {number} capacity - The capacity of the aircraft.
 * @property {string} manufacturer - The manufacturer of the aircraft.
 * @property {AircraftSize} size - The size of the aircraft.
 * @property {AircraftCategory[]} category - The category of the aircraft.
 * @property {AircraftPropType} propType - The propulsion type of the aircraft.
 * @property {AircraftPropSubType} propSubType - The propulsion subtype of the aircraft.
 * @property {AircraftMission[]} availableMissions - The available missions of the aircraft.
 * @property {number} grossWeight - The gross weight of the aircraft.
 * @property {number} fuelCapacity - The fuel capacity of the aircraft.
 * @property {number} efficiency - The efficiency of the aircraft.
 * @property {number} maxSpeed - The maximum speed of the aircraft.
 * @property {number} maxHeight - The maximum height of the aircraft.
 * @property {number} maxWeight - The maximum weight of the aircraft. 
 */
export class AircraftModel {
    public readonly id:number;
    private _name: string;
    private _capacity: number;
    private _manufacturer: string;
    private _size: AircraftSize;
    private _category: AircraftCategory[];
    private _propType: AircraftPropType;
    private _propSubType: AircraftPropSubType;
    private _availableMissions: AircraftMission[];
    private _grossWeight: number;
    private _fuelCapacity: number;
    private _efficiency: number;
    private _maxSpeed: number;
    private _maxHeight: number;
    private _maxWeight: number;
    /**
     * Instantiates a new aircraft model.
     * @param id - The unique ID of the aircraft model.
     * @param name - The name of the aircraft.
     * @param specs - The aircraft characteristics.
     */
    public constructor(
        id:number,
        name: string,
        specs: AircraftSpecs,
    ) {
        this.id = id;
        this._name = name;
        this._capacity = specs.capacity;
        this._manufacturer = specs.manufacturer;
        this._size = specs.size;
        this._category = specs.category;
        this._propType = specs.propType;
        this._propSubType = specs.propSubType;
        this._availableMissions = specs.availableMissions;
        this._grossWeight = specs.grossWeight;
        this._fuelCapacity = specs.fuelCapacity;
        this._efficiency = specs.efficiency;
        this._maxSpeed = specs.maxSpeed;
        this._maxHeight = specs.maxHeight;
        this._maxWeight = specs.maxWeight;


        if (this._name === "")
            throw new Error("Name cannot be empty");
        if (this._capacity <= 0)
            throw new Error("Capacity must be greater than 0");
        if (this._manufacturer === "")
            throw new Error("Manufacturer cannot be empty");
        if (this._grossWeight <= 0)
            throw new Error("Gross weight must be greater than 0");
        if (this._fuelCapacity <= 0)
            throw new Error("Fuel capacity must be greater than 0");
        if (this._efficiency <= 0 || this._efficiency > 1)
            throw new Error("Efficiency must be greater than 0 and less than or equal to 1");
        if (this._maxSpeed <= 0)
            throw new Error("Max speed must be greater than 0");
        if (this._maxHeight <= 0)
            throw new Error("Max height must be greater than 0");
        if (this._maxWeight <= 0)
            throw new Error("Max weight must be greater than 0");
        if (this._maxWeight < this._grossWeight)
            throw new Error("Max weight must be greater than gross weight");

        if (this._category.length === 0)
            throw new Error("Aircraft must have at least one category");
        if (this._availableMissions.length === 0)
            throw new Error("Aircraft must have at least one mission");

        if (!this.ValidatePropSubType(this._propType, this._propSubType))
            throw new Error("Aircraft prop subtype is not allowed for this proptype");
        if (!this.ValidateMission(this._category, this._availableMissions))
            throw new Error("Aircraft mission is not allowed for this category of aircraft");
    }

    /**
     * Gets or sets the name property of the aircraft.
     * @type {string}
     * @throws {Error} if name is empty string.
     */
    get name() { return this._name; }
    set name(value: string) {
        if (value === "") throw new Error("Name cannot be empty");
        this._name = value;
    }

    /**
     * Gets or sets the capacity property of the aircraft.
     * @type {number}
     * @throws {Error} if the capacity is less than 1
     */
    get capacity() { return this._capacity; }
    set capacity(value: number) {
        if (value <= 0) throw new Error("Capacity must be greater than 0");
        this._capacity = value;
    }

    /**
     * Gets or sets the manufacturer property of the aircraft.
     * @type {string}
     * @throws {Error} if the manufacturer is empty string.
     */
    get manufacturer() { return this._manufacturer; }
    set manufacturer(value: string) {
        if (value === "") throw new Error("Manufacturer cannot be empty");
        this._manufacturer = value;
    }

    /**
     * Gets or sets the size property of the aircraft.
     * @type {AircraftSize}
     */
    get size() { return this._size; }
    set size(value: AircraftSize) { this._size = value; }

    /**
     * Gets or sets the category property of the aircraft.
     * @type {AircraftCategory[]}
     * @throws {Error} if the category array is empty.
     */
    get category() { return this._category; }
    set category(value: AircraftCategory[]) {
        if (value.length === 0) throw new Error("Aircraft must have at least one category");
        this._category = value;
    }

    /**
     * Gets or sets the propType property of the aircraft.
     * @type {AircraftPropType}
     */
    get propType() { return this._propType; }
    set propType(value: AircraftPropType) { this._propType = value; }

    /**
     * Gets or sets the propSubType property of the aircraft.
     * @type {AircraftPropSubType}
     * @throws {Error} if the prop subtype is not allowed for the prop type.
     */
    get propSubType() { return this._propSubType; }
    set propSubType(value: AircraftPropSubType) {
        if (!this.ValidatePropSubType(this._propType, value))
            throw new Error("Aircraft prop subtype is not allowed for this proptype");
        this._propSubType = value;
    }

    /**
     * Gets or sets the availableMissions property of the aircraft.
     * @type {AircraftMission[]}
     * @throws {Error} if the mission array is empty.
     * @throws {Error} if the mission is not allowed for the category.
     */
    get availableMissions() { return this._availableMissions; }
    set availableMissions(value: AircraftMission[]) {
        if (value.length === 0) throw new Error("Aircraft must have at least one mission");
        if (!this.ValidateMission(this._category, value))
            throw new Error("Aircraft mission is not allowed for this category of aircraft");
        this._availableMissions = value;
    }

    /**
     * Gets or sets the grossWeight property of the aircraft.
     * @type {number}
     * @throws {Error} if the gross weight is less than or equal to 0.
     * @throws {Error} if the gross weight is less than the max weight.
     */
    get grossWeight() { return this._grossWeight; }
    set grossWeight(value: number) {
        if (value <= 0) throw new Error("Gross weight must be greater than 0");
        if (value > this._maxWeight) throw new Error("Gross weight must be less than or equal to max weight");
        this._grossWeight = value;
    }

    /**
     * Gets or sets the fuelCapacity property of the aircraft.
     * @type {number}
     * @throws {Error} if the fuel capacity is less than or equal to 0.
     */
    get fuelCapacity() { return this._fuelCapacity; }
    set fuelCapacity(value: number) {
        if (value <= 0) throw new Error("Fuel capacity must be greater than 0");
        this._fuelCapacity = value;
    }

    /**
     * Gets or sets the efficiency property of the aircraft.
     * @type {number}
     * @throws {Error} if the efficiency is less than or equal to 0.
     * @throws {Error} if the efficiency is greater than 1.
     */
    get efficiency() { return this._efficiency; }
    set efficiency(value: number) {
        if (value <= 0) throw new Error("Efficiency must be greater than 0");
        if (value > 1) throw new Error("Efficiency must be less than or equal to 1");
        this._efficiency = value;
    }

    /**
     * Gets or sets the maxSpeed property of the aircraft.
     * @type {number}
     * @throws {Error} if the max speed is less than or equal to 0.
     */
    get maxSpeed() { return this._maxSpeed; }
    set maxSpeed(value: number) {
        if (value <= 0) throw new Error("Max speed must be greater than 0");
        this._maxSpeed = value;
    }

    /**
     * Gets or sets the maxHeight property of the aircraft.
     * @type {number}
     * @throws {Error} if the max height is less than or equal to 0.
     */
    get maxHeight() { return this._maxHeight; }
    set maxHeight(value: number) {
        if (value <= 0) throw new Error("Max height must be greater than 0");
        this._maxHeight = value;
    }

    /**
     * Gets or sets the maxWeight property of the aircraft.
     * @type {number}
     * @throws {Error} if the max weight is less than or equal to 0.
     * @throws {Error} if the max weight is less than the gross weight.
     */
    get maxWeight() { return this._maxWeight; }
    set maxWeight(value: number) {
        if (value <= 0) throw new Error("Max weight must be greater than 0");
        if (value <= this._grossWeight) throw new Error("Max weight must be greater than gross weight");
        this._maxWeight = value;
    }

    /**
     * Validates if the propulsion subtype is allowed for the propulsion type.
     * @param propType - The propulsion type of the aircraft.
     * @param propSubType - The propulsion subtype of the aircraft.
     * @returns {boolean} - True if the prop subtype is allowed for the prop type, false otherwise.
     */
    private ValidatePropSubType(propType: AircraftPropType, propSubType: AircraftPropSubType): boolean {
        return AicraftPropRestrictions[propType].includes(propSubType);
    }

    /**
     * Validates if the missions the aircraft performs are allowed for its categories.
     * @param categories - The category array of the aircraft.
     * @param missions - The mission array of the aircraft.
     * @returns {boolean} - True if the missions the aircraft performs are allowed for its categories. False if otherwise.
     */
    private ValidateMission(categories: AircraftCategory[], missions: AircraftMission[]): boolean {
        for (const mission of missions) {
            let allowed = false;
            for (const category of categories)
            {
                allowed = allowed || AircraftMissionRestrictions[category].includes(mission);
            }
            if (!allowed)
                return false;
        }
        return true;
    }
}