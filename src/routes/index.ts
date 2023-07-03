import { Router, Request, Response } from "express";
import { generateToken, verifyToken } from '../utilities/jwtUtils';


import { userRouter } from "./user.routes";
import { sheepRouter } from "./sheep.routes";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/sheep", sheepRouter); 

export { routes };