import { Sheep } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetSheepsUseCase{
    async execute(): Promise<Sheep[]>{
        const sheep = await prisma.sheep.findMany({})

        return sheep;
    }
}