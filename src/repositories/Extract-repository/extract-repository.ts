import { PrismaClient } from "@prisma/client";

export class ExtractRepository {
    private prisma = new PrismaClient()

    async getExtracts(userId: number): Promise<any> {
        const extracts = await this.prisma.extract.findMany({
            where: {
                userId
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

    async getExtractSumPriceProducts(ids: string): Promise<any> {
        console.log('SELECT sum(price) FROM products p WHERE p.id in ('+ids+')')
        const getKart: Array<{sum: number}> = await this.prisma.$queryRawUnsafe('SELECT sum(price) FROM products p WHERE p.id in ('+ids+')')
        return getKart[0].sum
    }
}