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

    async loginById(id: number): Promise<any> {
        const prisma = new PrismaClient()
        const loginByIdRequest = await prisma.user.findFirstOrThrow({
            where: {
                id
            },
            select: {
                name: true,
                email: true,
                password: true,
                telefone: true,
                saldo: true,
            }
        })

        return loginByIdRequest
    }
}