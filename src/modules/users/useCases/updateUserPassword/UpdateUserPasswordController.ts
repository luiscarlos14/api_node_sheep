import { Request, Response } from "express";
import { UpdateUserPasswordUseCase } from "./UpdateUserPasswordUseCase";

export class UpdateUserPasswordController {
    async handle(req: Request, res: Response) {
        const { id, email, password, newPassword } = req.body;

        try {
            const updateUserPasswordUseCase = new UpdateUserPasswordUseCase();

            const result = await updateUserPasswordUseCase.execute({
                id, email, password, newPassword
            });

            return res.status(201).send({"message": "updated password"});
            
        } catch (error) {
            res.status(500).json({ error: 'Error when logging in' });

        }


    }
}
