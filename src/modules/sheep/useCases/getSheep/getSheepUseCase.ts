import { Sheep } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { count } from "console";

export class GetSheepUseCase {
    async execute(id: string) {

        try {
            const sheep = await prisma.sheep.findUnique({
                where: {
                    id: id,
                },

                select: {
                    id: true,
                    race: true,
                    female: true,
                    birth: true,
                    alive: true,
                    affiliation_sheep: {
                        select: {
                            motherID: true,
                        }
                    },
                    vaccines: {

                        select: {
                            name: true,
                            indications: true,
                            dosage: true,
                            date: true
                        }
                    },
                    haggard: true,
                },



            })

            return sheep;

        } catch (error) {
            console.error('Error retrieving specific data:', error);
            return null;
        }



    }
}