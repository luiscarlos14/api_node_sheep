import { Request, Response } from "express";
import { GetSheepVaccinesAllUseCase } from "./GetSheepVaccinesAllUseCase";

export class GetSheepVaccinesAllController {
    async handle(req: Request, res: Response) {

        let { userId } = req.body;

        const getSheepVaccinesAllUseCase = new GetSheepVaccinesAllUseCase();

        const result = await getSheepVaccinesAllUseCase.execute( userId );

        return res.status(200).json(result);

    }
}