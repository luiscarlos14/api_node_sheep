import { Response, Request } from "express";
import { CreateAffiliationUseCase } from "./CreateAffiliationUseCase";

export class CreateAffiliationController {
    async handle(req: Request, res: Response) {
        const { sheepID, motherID } = req.body;

        const createAffiliationUseCase = new CreateAffiliationUseCase();

        const result = await createAffiliationUseCase.execute({
            sheepID,
            motherID
        });

        return res.status(201).json(result);
    }
}