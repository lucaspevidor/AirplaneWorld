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
    /**
     * Instantiates a new aircraft model.
     * @param id - The unique ID of the aircraft model.
     * @param name - The name of the aircraft.
     * @param capacity - The capacity of the aircraft.
     * @param manufacturer - The manufacturer of the aircraft.
     * @param size - The size of the aircraft.
     * @param category - The category of the aircraft.
     * @param propType - The propulsion type of the aircraft.
     * @param propSubType - The propulsion subtype of the aircraft.
     * @param availableMissions - The available missions of the aircraft.
     * @param grossWeight - The gross weight of the aircraft.
     * @param fuelCapacity - The fuel capacity of the aircraft.
     * @param efficiency - The efficiency of the aircraft.
     * @param maxSpeed - The maximum speed of the aircraft.
     * @param maxHeight - The maximum height of the aircraft.
     * @param maxWeight - The maximum weight of the aircraft.
     */
    public constructor(
        public readonly id:number,
        public name: string,
        public capacity: number,
        public manufacturer: string,
        public size: AircraftSize,
        public category: AircraftCategory[],
        public propType: AircraftPropType,
        public propSubType: AircraftPropSubType,
        public availableMissions: AircraftMission[],
        public grossWeight: number,
        public fuelCapacity: number,
        public efficiency: number,
        public maxSpeed: number,
        public maxHeight: number,
        public maxWeight: number
    ) {
        if (name === "")
            throw new Error("Name cannot be empty");
        if (capacity <= 0)
            throw new Error("Capacity must be greater than 0");
        if (manufacturer === "")
            throw new Error("Manufacturer cannot be empty");
        if (grossWeight <= 0)
            throw new Error("Gross weight must be greater than 0");
        if (fuelCapacity <= 0)
            throw new Error("Fuel capacity must be greater than 0");
        if (efficiency <= 0 || efficiency > 1)
            throw new Error("Efficiency must be greater than 0 and less than or equal to 1");
        if (maxSpeed <= 0)
            throw new Error("Max speed must be greater than 0");
        if (maxHeight <= 0)
            throw new Error("Max height must be greater than 0");
        if (maxWeight <= 0)
            throw new Error("Max weight must be greater than 0");
        if (maxWeight < grossWeight)
            throw new Error("Max weight must be greater than gross weight");

        if (category.length === 0)
            throw new Error("Aircraft must have at least one category");
        if (availableMissions.length === 0)
            throw new Error("Aircraft must have at least one mission");

        if (!this.ValidatePropSubType(propType, propSubType))
            throw new Error("Aircraft prop subtype is not allowed for this proptype");
        if (!this.ValidateMission(category, availableMissions))
            throw new Error("Aircraft mission is not allowed for this category of aircraft");
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