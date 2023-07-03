import { Request, Response } from "express";
import { GetSheepHaggardUseCase } from "./GetSheepHaggardUseCase";

export class GetSheepHaggardController {
    async handle(req: Request, res: Response) {

        let { id } = req.params;

        const getSheepHaggardUseCase = new GetSheepHaggardUseCase();

        const result = await getSheepHaggardUseCase.execute( id );

        return res.status(201).json(result);

    }
}