import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            const loginUseCase = new LoginUseCase();

            const result = await loginUseCase.execute({
                email, password,
            });

            return res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Error when logging in' });

        }


    }
}
