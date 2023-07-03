import { Router } from "express";

import { CreateSheepController } from '../modules/sheep/useCases/createSheep/CreateSheepController';
import { CreateAffiliationController } from '../modules/sheep/useCases/createAffiliation/CreateAffiliationController';
import { CreateVaccinesController } from "../modules/sheep/useCases/createVaccines/CreateVaccinesController";
import { CreateHaggardController } from "../modules/sheep/useCases/createHaggard/CreateHaggardController";

import { GetSheepsController } from "../modules/sheep/useCases/getSheeps/GetSheepsController";
import { GetSheepController } from "../modules/sheep/useCases/getSheep/getSheepController";
import { GetSheepVaccinesController } from "../modules/sheep/useCases/getSheepVaccines/GetSheepVaccinesController";
import { GetSheepHaggardController } from "../modules/sheep/useCases/getSheepHaggard/GetSheepHaggardController";
import { GetSheepVaccinesAllController } from "../modules/sheep/useCases/getSheepVaccinesAll/GetSheepVaccinesAllController";

import { UpdateSheepController } from "../modules/sheep/useCases/updateSheep/UpdateSheepController";

import { authenticateToken } from '../utilities/authenticateToken';

const createSheepController = new CreateSheepController();
const createAffiliationController = new CreateAffiliationController();
const createVaccinesController = new CreateVaccinesController();
const createHaggardController = new CreateHaggardController();
const getSheepsController = new GetSheepsController();
const getSheepController = new GetSheepController();
const getSheepVaccinesController = new GetSheepVaccinesController();
const getSheepVaccinesAllController = new GetSheepVaccinesAllController();
const getSheepHaggardController = new GetSheepHaggardController();
const updateSheepController = new UpdateSheepController();


const sheepRouter = Router();

sheepRouter.post("/", createSheepController.handle);
sheepRouter.get("/", authenticateToken, getSheepsController.handle);
sheepRouter.put("/", authenticateToken, updateSheepController.handle);
sheepRouter.get("/:id", getSheepController.handle);


sheepRouter.post("/affiliation", createAffiliationController.handle);

sheepRouter.post("/vaccines", createVaccinesController.handle);
sheepRouter.get("/vaccines/all", getSheepVaccinesAllController.handle);
sheepRouter.get("/vaccines/:id", getSheepVaccinesController.handle);

sheepRouter.post("/haggard", createHaggardController.handle);
sheepRouter.get("/haggard/:id", getSheepHaggardController.handle);


export { sheepRouter };