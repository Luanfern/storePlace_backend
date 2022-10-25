import { PrismaClient } from "@prisma/client";
import { IUsuario } from "../../Interfaces/IUsuario";
import { ShoppingKartRepository } from "../Shoppin-Kart-repository";

export class RegisterRepository {
    async handle(register: IUsuario, kartId: number): Promise<any> {
        const prisma = new PrismaClient()

        const registerUser = await prisma.user.create({
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
        const prisma = new PrismaClient()
        const emailExists = await prisma.user.count({
            where: {
                email
            }
        })
        return emailExists
    }
}