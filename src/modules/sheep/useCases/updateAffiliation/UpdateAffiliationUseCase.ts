import { prisma } from "../../../../prisma/client";
import { UpdateAffiliationDTO } from "../../dtos/AffiliationDTO";
import { AppError } from "../../../../errors/AppError";

import { Affiliation } from "@prisma/client";

export class UpdateAffiliationUseCase {
    async execute({ id, motherID }: UpdateAffiliationDTO): Promise<Affiliation> {


        const affiliationAlready = await prisma.affiliation.findUnique({
            where: {
                id,
            },
        });

        if (!affiliationAlready) {
            throw new AppError("Affiliation not already exists");
        }

        const updateSheepAffiliation = await prisma.affiliation.update({
            where: {
                id: id,
            },
            data: {
                motherID
            },
        });

        return updateSheepAffiliation;
    }
}