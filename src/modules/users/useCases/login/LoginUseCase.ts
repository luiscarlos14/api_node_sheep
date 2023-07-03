import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { LoginDTO } from "../../dtos/LoginDTO";

import bcrypt from "bcryptjs";

import { generateToken } from "../../../../utilities/jwtUtils";

export class LoginUseCase {
    async execute({ email, password }: LoginDTO): Promise<object> {


        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        });

        if (!user) {
            throw new AppError("User not exists");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError('invalid credentials');
        }

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