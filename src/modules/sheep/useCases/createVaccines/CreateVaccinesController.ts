import { Request, Response } from "express";
import { CreateVaccinesUseCase } from "./CreateVaccinesUseCase";

export class CreateVaccinesController{
    async handle(req: Request, res: Response){
        const { userID, sheepID, name, indications, dosage, date} = req.body;

        const createVaccinesUseCase = new CreateVaccinesUseCase();

        const result = await createVaccinesUseCase.execute({
            userID, sheepID, name, indications, dosage, date
        });

        return res.status(201).json(result);

    }
}