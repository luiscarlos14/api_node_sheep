import { prisma } from "../../../../prisma/client";
import { UpdateHaggardDTO } from "../../dtos/HaggardDTO";
import { AppError } from "../../../../errors/AppError";

import {  Haggard } from "@prisma/client";

export class UpdateHaggardUseCase {
    async execute({ id, date, weight, price, soldAmount, profit}: UpdateHaggardDTO): Promise<Haggard> {

        const haggardAlready = await prisma.vaccines.findUnique({
            where: {
                id,
            },
        });

        if (!haggardAlready) {
            throw new AppError("Vaccine not already exists");
        }

        const updateHaggard= await prisma.haggard.update({
            where: {
                id: id,
            },
            data: {
                date, weight, price, soldAmount, profit
            },
        });

        return updateHaggard;
    }
}





