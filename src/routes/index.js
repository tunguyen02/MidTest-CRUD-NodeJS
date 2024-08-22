import { Router } from "express";
import UserRouter from "./userRoutes.js";
import WorkRouter from "./workRoutes.js";
import ProjectRouter from "./projectRoutes.js";
import ProcessRouter from "./processRoutes.js";

const RootRouterV1 = Router();

RootRouterV1.use('/users', UserRouter);
RootRouterV1.use('/works', WorkRouter);
RootRouterV1.use('/projects', ProjectRouter);
RootRouterV1.use('/processes', ProcessRouter);

export {
    RootRouterV1
};
