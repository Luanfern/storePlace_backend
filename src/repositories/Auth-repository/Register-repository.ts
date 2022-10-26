import { PrismaClient } from "@prisma/client";
import { IUsuario } from "../../Interfaces/IUsuario";

export class RegisterRepository {
    private prisma = new PrismaClient()
    async handle(register: IUsuario, kartId: number): Promise<any> {
        const registerUser = await this.prisma.user.create({
            data: {
                name: register.name!,
                shoppingKartId: kartId,
                email: register.email,
                password: register.password,
                telefone: register.telefone!,
                currency: register.currency
            }
        })
        return registerUser.id
    }

    async verifyExistEmail(email: string): Promise<any> {
        const emailExists = await this.prisma.user.count({
            where: {
                email
            }
        })
        return emailExists
    }
}