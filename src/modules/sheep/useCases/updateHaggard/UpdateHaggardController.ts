import { Request, Response } from "express";
import { UpdateHaggardUseCase } from "./UpdateHaggardUseCase";

export class UpdateHaggardController{
    async handle(req: Request, res: Response){
        const { id, date, weight, price, soldAmount, profit} = req.body;

        const updateHaggardUseCase = new UpdateHaggardUseCase();

        const result = await updateHaggardUseCase.execute({
            id, date, weight, price, soldAmount, profit
        });

        return res.status(201).json(result);

    }
}

