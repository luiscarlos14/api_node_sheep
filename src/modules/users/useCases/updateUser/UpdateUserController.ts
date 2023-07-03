import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id, name, surname, farmName } = req.body;


    const updateUserUseCase = new UpdateUserUseCase();


    const result = await updateUserUseCase.execute({
      id,
      name,
      surname,
      farmName,
    });

    return res.status(201).send({"message": "updated informations"});
  }
}
