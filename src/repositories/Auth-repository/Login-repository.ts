import { PrismaClient } from "@prisma/client";
import { IUsuario } from "../../Interfaces/IUsuario";

export class LoginRepository {
    async handle(login: IUsuario): Promise<any> {
        const prisma = new PrismaClient()
        const loginRequest = await prisma.user.findFirstOrThrow({
            where: {
                email: login.email,
                password: login.password
            },
            select: {
                id: true,
            }
        })

        return loginRequest
    }

}