import { PrismaClient } from "@prisma/client";
import { IUsuario } from "../../Interfaces/IUsuario";

export class UserRepository {
    private prisma = new PrismaClient()
    async getInfoById(id: number): Promise<any> {
        const getInfo = await this.prisma.user.findFirstOrThrow({
            where: {
                id
            }
        })
        return getInfo
    }

    async updateCurrency(id: number, updateCurrencyValue: number): Promise<any> {
        const currency = await this.prisma.user.update({
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