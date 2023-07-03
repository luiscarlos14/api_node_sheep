import { Request, Response } from "express";
import { GetSheepsUseCase } from "./GetSheepsUseCase";

export class GetSheepsController{
    async handle(req: Request, res: Response){
        const getSheepsUseCase = new GetSheepsUseCase();

        const result = await getSheepsUseCase.execute();

        return res.status(201).json(result);

    }
}