import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

import bcrypt from "bcryptjs";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, name, surname, farmName, pass } = req.body;

    async function encryptPassword(password: string): Promise<string> {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    }

    const createUserUseCase = new CreateUserUseCase();

    const password = await encryptPassword(pass);

    const result = await createUserUseCase.execute({
      email,
      name,
      surname,
      farmName,
      password,
    });

    return res.status(201).json(result);
  }
}
