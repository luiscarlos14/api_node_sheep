import { prisma } from "../../../../prisma/client";
import { CreateSheepDTO } from "../../dtos/CreateSheepDTO";

import { Sheep } from '@prisma/client';

export class CreateSheepUseCase {
    async execute({identifier, name, userID, race, female, birth, alive }: CreateSheepDTO): Promise<Sheep> {

        const sheep = await prisma.sheep.create({
            data: {
                identifier, name, userID, race, female, birth, alive
            }
        });

        return sheep;
    }
}