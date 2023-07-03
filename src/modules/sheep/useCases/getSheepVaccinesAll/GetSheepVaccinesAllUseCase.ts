import { prisma } from "../../../../prisma/client";

export class GetSheepVaccinesAllUseCase{
    async execute(id: string){
        const vacinnes = await prisma.vaccines.findMany({
            where:{
                userID: id, 
                sheepID: null,
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