/**
 * Represents a route airplanes can follow
 * @property {number} id - Unique ID of the route
 * @property {string} origin - Route's origin airport unique code
 * @property {string} destination - Route's destination airport unique code
 * @property {string | undefined} alternate - Route's alternative destination airport unique code
 * @interface
 */
export interface IRoute {
    readonly id: number;
    readonly origin: string;
    readonly destination: string;
    readonly alternate?: string;
}