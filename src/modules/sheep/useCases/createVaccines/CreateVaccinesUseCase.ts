import { prisma } from "../../../../prisma/client";
import { CreateVaccinesDTO } from "../../dtos/CreateVaccinesDTO";

import { Vaccines } from "@prisma/client";

export class CreateVaccinesUseCase {
    async execute({ userID, sheepID, name,indications, dosage, date}: CreateVaccinesDTO): Promise<Vaccines> {
        const vaccines = await prisma.vaccines.create({
            data: {
                userID, sheepID, name, indications, dosage, date
            },
        });
        return vaccines;
    }
}
