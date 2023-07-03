import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateUserPasswordDTO } from "../../dtos/UpdateUserPasswordDTO";

import { User } from "@prisma/client";

import bcrypt from "bcryptjs";

export class UpdateUserPasswordUseCase {
    async execute({ id, password, newPassword }: UpdateUserPasswordDTO): Promise<User> {

        const user = await prisma.user.findUnique({
            where: {
                id,
            },
        });

        if (!user) {
            throw new AppError("User not already exists");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError('invalid credentials');
        }

        async function encryptPassword(password: string): Promise<string> {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            return hashedPassword;
        }

        const pass = await encryptPassword(newPassword);


        const updateUser = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                password: pass
            },
        });

        return updateUser;
    }
}
