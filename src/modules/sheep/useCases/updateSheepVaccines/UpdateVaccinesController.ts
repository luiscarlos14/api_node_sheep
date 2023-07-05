import { Request, Response } from "express";
import { UpdateVaccinesUseCase } from "./UpdateVaccinesUseCase";

export class UpdateVaccinesController{
    async handle(req: Request, res: Response){
        const { id, name, indications, dosage, date} = req.body;

        const updateVaccinesUseCase = new UpdateVaccinesUseCase();

        const result = await updateVaccinesUseCase.execute({
            id, name, indications, dosage, date
        });

        return res.status(201).json(result);

    }
}