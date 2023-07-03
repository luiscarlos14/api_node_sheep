import { Request, Response } from "express";
import { CreateHaggardUseCase } from "./CreateHaggardUseCase";

export class CreateHaggardController{
    async handle(req: Request, res: Response) {
        const {sheepID, date, weight, price, soldAmount, profit } = req.body;
    
    
        const createHaggardUseCase = new CreateHaggardUseCase();
    
    
        const result = await createHaggardUseCase.execute({
            sheepID, date, weight, price, soldAmount, profit
        });
    
        return res.status(201).json(result);
      }
}