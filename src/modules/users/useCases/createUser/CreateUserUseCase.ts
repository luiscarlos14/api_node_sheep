import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

import { generateToken } from "../../../../utilities/jwtUtils";

import { User } from '@prisma/client';

export class CreateUserUseCase {
    async execute({ email, name, surname, farmName, password }: CreateUserDTO): Promise<object> {
        const userAlreadyExistsEmail = await prisma.user.findUnique({
            where: {
                email,
            }
        });

        if (userAlreadyExistsEmail) {
            throw new AppError("User already exists");
        }

        const user = await prisma.user.create({
            data: {
                email, name, surname, farmName, password
            }
        });

        const constructorToken = {
            userId: user.id,
            email: user.email,
        }

        const token = generateToken(constructorToken);

        const result = {
            userId: user.id,
            email: user.email,
            name: user.name,
            surname: user.surname,
            farmName: user.farmName,
            token: token
        }

        return result;

    }
}