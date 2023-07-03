import { Request, Response } from "express";
import { GetSheepVaccinesUseCase } from "./GetSheepVaccinesUseCase";

export class GetSheepVaccinesController {
    async handle(req: Request, res: Response) {

        let { id } = req.params;

        const getSheepVaccinesUseCase = new GetSheepVaccinesUseCase();

        const result = await getSheepVaccinesUseCase.execute( id );

        return res.status(200).json(result);

    }
}