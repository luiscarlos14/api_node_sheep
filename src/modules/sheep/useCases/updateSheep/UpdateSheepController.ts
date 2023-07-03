import { Request, Response } from "express";
import { UpdateSheepUseCase } from "./UpdateSheepUseCase";

export class UpdateSheepController {
  async handle(req: Request, res: Response) {
    const {id, identifier, name, userID, race, female, birth, alive } = req.body;


    const updateSheepUseCase = new UpdateSheepUseCase();


    const result = await updateSheepUseCase.execute({
      id, identifier, name, userID, race, female, birth, alive
    });

    return res.status(201).json(result);
  }
}
