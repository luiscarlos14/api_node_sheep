import { prisma } from "../../../../prisma/client";
import { CreateHaggardDTO } from "../../dtos/HaggardDTO";

import { Haggard } from "@prisma/client";

export class CreateHaggardUseCase{
    async execute({sheepID, date, weight, price, soldAmount, profit}:CreateHaggardDTO):Promise<Haggard>{
        
        const haggard = await prisma.haggard.create({
            data:{
                sheepID, date, weight, price, soldAmount, profit
            }
        });

        return haggard;
    }
}