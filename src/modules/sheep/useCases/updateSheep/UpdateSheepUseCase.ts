import { prisma } from "../../../../prisma/client";
import { UpdateSheepDTO } from "../../dtos/UpdateSheepDTO";

import { AppError } from "../../../../errors/AppError";

import { Sheep } from '@prisma/client';

export class UpdateSheepUseCase {
    async execute({id, identifier, name, userID, race, female, birth, alive }: UpdateSheepDTO): Promise<Sheep> {

        const sheepAlreadyExistsID = await prisma.sheep.findUnique({
            where: {
              id,
            },
          });
      
          if (!sheepAlreadyExistsID) {
            throw new AppError("Sheep not already exists");
          }
      
          const updateSheep = await prisma.sheep.update({
            where: {
              id: id,
            },
            data: {
                identifier, name, userID, race, female, birth, alive
            },
          });
      
          return updateSheep;
        }

}