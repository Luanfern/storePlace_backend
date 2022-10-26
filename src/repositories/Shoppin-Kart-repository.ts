import { PrismaClient } from "@prisma/client";

export class ShoppingKartRepository {
    private prisma = new PrismaClient()
    async createKart(): Promise<any> {
        const getKart = await this.prisma.shoppingKart.create({
            data:{}
        })
        return getKart.id
    }

    async getIdKart(id: number): Promise<any> {
        const getKart = await this.prisma.user.findUniqueOrThrow({
            where:{
                id
            }
        })
        return getKart.shoppingKartId
    }
    
    async getKartProductsId(id: number): Promise<any> {
        const getKart = await this.prisma.shoppingKart.findUniqueOrThrow({
            where: {
                id
            },
            
        })
        return getKart.listProducts
    }

    async getKartProducts(ids: string): Promise<any> {
        const getKart = await this.prisma.$queryRawUnsafe('SELECT * FROM products p WHERE p.id in ('+ids+')')
        return getKart
    }

    async saveItemKart(id: number, productsId: string): Promise<any> {
        const getKart = await this.prisma.$queryRawUnsafe(
            `UPDATE shoppingkart  SET "listProducts" = '${productsId}' where id = ${id};`
        )
        return getKart
    }

    async removeItemKart(id: number, productsId: string): Promise<any> {
        const getKart = await this.prisma.$queryRawUnsafe(
            `UPDATE shoppingkart SET "listProducts" = '${productsId}' where id = ${id};`
        )
        return getKart
    }
}