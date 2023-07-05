import { prisma } from "../../../../prisma/client";
import { UpdateVaccinesDTO } from "../../dtos/VaccinesDTO";
import { AppError } from "../../../../errors/AppError";

import { Vaccines } from "@prisma/client";

export class UpdateVaccinesUseCase {
    async execute({ id, name, indications, dosage, date }: UpdateVaccinesDTO): Promise<Vaccines> {

        const vaccinesAlready = await prisma.vaccines.findUnique({
            where: {
                id,
            },
        });

        if (!vaccinesAlready) {
            throw new AppError("Vaccine not already exists");
        }

        const updateSheep = await prisma.vaccines.update({
            where: {
                id: id,
            },
            data: {
                name, indications, dosage, date
            },
        });

        return updateSheep;
    }
}





