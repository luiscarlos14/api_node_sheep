import { Request, Response } from "express";
import { GetSheepUseCase } from "./getSheepUseCase";

export class GetSheepController {
    async handle(req: Request, res: Response) {

        const { id } = req.body;

        const getSheepUseCase = new GetSheepUseCase();

        const result = await getSheepUseCase.execute( id );

        return res.status(201).json(result);

    }
}