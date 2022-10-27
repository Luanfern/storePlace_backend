import { PrismaClient } from "@prisma/client";

export class ExtractRepository {
    private prisma = new PrismaClient()

    async getExtracts(idUser: number): Promise<any> {
        const extracts = await this.prisma.extract.findMany({
            where: {
                idUser
            }
        })
        return extracts
    }

    async getExtract(idExtract: number): Promise<any> {
        const extracts = await this.prisma.extract.findUniqueOrThrow({
            where: {
                id: idExtract
            }
        })
        return extracts
    }

    async saveExtracts(userId: number, totalPrice: number, productsIds: string): Promise<any> {
        console.log(`insert  into extracts ("idUser", "total", "listProducts") values (${userId}, ${totalPrice}, '{${productsIds}}')`)
        const extracts = await this.prisma.$queryRawUnsafe(
            `insert  into extracts ("idUser", "total", "listProducts") values (${userId}, ${totalPrice}, '{${productsIds}}')`)
        return extracts
    }

    async getExtractPriceProducts(ids: string): Promise<any> {
        console.log('SELECT * FROM products p WHERE p.id in ('+ids+')')
        const getKart = await this.prisma.$queryRawUnsafe('SELECT * FROM products p WHERE p.id in ('+ids+')')
        return getKart
    }
}