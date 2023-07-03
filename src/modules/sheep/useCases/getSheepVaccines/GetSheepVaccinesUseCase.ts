import { prisma } from "../../../../prisma/client";

export class GetSheepVaccinesUseCase{
    async execute(id: string){
        const vacinnes = await prisma.vaccines.findMany({
            where:{
                sheepID: id
            },
            select:{
                id: true,
                name: true,
                indications: true,
                dosage: true,
                date: true
            }
        })

        return vacinnes;
    }
}