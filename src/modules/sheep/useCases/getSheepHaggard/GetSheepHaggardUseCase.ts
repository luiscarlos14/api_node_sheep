import { prisma } from "../../../../prisma/client";

export class GetSheepHaggardUseCase{
    async execute(id: string){
        const haggard = await prisma.haggard.findMany({
            where:{
                sheepID: id
            },
            select:{
                id: true,
                date: true,
                weight: true,
                price: true,
                soldAmount: true,
                profit: true,

            }
        })

        return haggard;
    }
}