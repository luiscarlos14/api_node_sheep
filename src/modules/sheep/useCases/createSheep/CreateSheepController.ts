import { Request, Response } from "express";
import { CreateSheepUseCase } from "./CreateSheepUseCase";

export class CreateSheepController {
  async handle(req: Request, res: Response) {
    const { identifier, name, userID, race, female, birth, alive } = req.body;


    const createSheepUseCase = new CreateSheepUseCase();


    const result = await createSheepUseCase.execute({
      identifier, name, userID, race, female, birth, alive
    });

    return res.status(201).json(result);
  }
}
