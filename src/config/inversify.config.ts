import { Container } from "inversify";

import { IRoute } from "../models/Route.interface";
import { Route } from "../models/Route";

const container = new Container();

container.bind<IRoute>("IRoute").to(Route);

export { container };