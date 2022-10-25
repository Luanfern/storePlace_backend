import { PrismaClient } from "@prisma/client";

export class ShoppingKartRepository {

    async createKart(): Promise<any> {
        const prisma = new PrismaClient()
        const getKart = await prisma.shoppingKart.create({
            data:{}
        })
        return getKart.id
    }
    
    async getKartProductsId(id: number): Promise<any> {
        const prisma = new PrismaClient()
        const getKart = await prisma.shoppingKart.findUniqueOrThrow({
            where: {
                id
            },
            
        })
        return getKart.listProducts
    }

    async getKartProducts(ids: string): Promise<any> {
        const prisma = new PrismaClient()
        const getKart = await prisma.$queryRawUnsafe('SELECT * FROM products p WHERE p.id in ('+ids+')')
        return getKart
    }

    async saveItemKart(id: number, productsId: string): Promise<any> {
        const prisma = new PrismaClient()
        const getKart = await prisma.$queryRawUnsafe(
            `UPDATE shoppingkart  SET "listProducts" = '${productsId}' where id = ${id};`
        )
        return getKart
    }

    async removeItemKart(id: number, productsId: string): Promise<any> {
        const prisma = new PrismaClient()
        const getKart = await prisma.$queryRawUnsafe(
            `UPDATE shoppingkart SET "listProducts" = '${productsId}' where id = ${id};`
        )
        return getKart
    }
}