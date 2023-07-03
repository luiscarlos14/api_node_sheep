import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateUserDTO } from "../../dtos/UpdateUserDTO";

import { User } from "@prisma/client";

export class UpdateUserUseCase {
  async execute({ id, name, surname, farmName }: UpdateUserDTO): Promise<User> {
    const userAlreadyExistsEmail = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!userAlreadyExistsEmail) {
      throw new AppError("User not already exists");
    }

    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        surname,
        farmName,
      },
    });

    return updateUser;
  }
}
