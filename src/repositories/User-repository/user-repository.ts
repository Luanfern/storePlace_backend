import { PrismaClient } from "@prisma/client";
import { IUsuario } from "../../Interfaces/IUsuario";

export class UserRepository {

    async getInfoById(id: number): Promise<any> {
        const prisma = new PrismaClient()
        const getInfo = await prisma.user.findFirstOrThrow({
            where: {
                id
            }
        })
        return getInfo
    }

    async updateCurrency(id: number, updateCurrencyValue: number): Promise<any> {
        const prisma = new PrismaClient()
        const currency = await prisma.user.update({
            data: {
                currency: updateCurrencyValue
            },
            where: {
                id
            },
        })

        return currency.currency
    }
}