import { PrismaClient } from "@prisma/client";
import { IUsuario } from "../../Interfaces/IUsuario";

export class RegisterRepository {
    async handle(register: IUsuario): Promise<any> {
        const prisma = new PrismaClient()
        console.log('repository!')
        const registerUser = await prisma.user.create({
            data: {
                name: register.name!,
                email: register.email,
                password: register.password,
                telefone: register.telefone!,
                saldo: register.saldo
            }
        })
        return registerUser.id
    }

    async verifyExistEmail(email: string): Promise<any> {
        const prisma = new PrismaClient()
        const emailExists = await prisma.user.count({
            where: {
                email
            }
        })
        return emailExists
    }
}