import { Router } from "express";

import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { LoginController } from "../modules/users/useCases/login/LoginController";
import { UpdateUserController } from "../modules/users/useCases/updateUser/UpdateUserController";
import { UpdateUserPasswordController } from "../modules/users/useCases/updateUserPassword/UpdateUserPasswordController";

import {authenticateToken} from '../utilities/authenticateToken';

const createUserController = new CreateUserController();
const loginController = new LoginController();
const updateUserController = new UpdateUserController();
const updateUserPasswordController = new UpdateUserPasswordController();

const userRouter = Router();

userRouter.post("/", createUserController.handle);
userRouter.put("/update", authenticateToken, updateUserController.handle);
userRouter.put("/update/password", authenticateToken, updateUserPasswordController.handle);
userRouter.post("/login", loginController.handle);

export { userRouter };