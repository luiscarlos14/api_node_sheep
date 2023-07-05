import { Response, Request } from "express";
import { UpdateAffiliationUseCase } from "./UpdateAffiliationUseCase";

export class UpdateAffiliationController {
    async handle(req: Request, res: Response) {
        const { id, motherID } = req.body;

        const updateAffiliationUseCase = new UpdateAffiliationUseCase();

        const result = await updateAffiliationUseCase.execute({
            id,
            motherID
        });

        return res.status(201).json(result);
    }
}