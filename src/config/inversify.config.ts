import { Container } from "inversify";

import { IRoute } from "../models/Route.interface";
import { Route } from "../models/Route";

import { ILocation } from "../models/Location.interface";
import { Location } from "../models/Location";

const container = new Container();

container.bind<IRoute>("IRoute").to(Route);
container.bind<ILocation>("ILocation").to(Location);

export { container };