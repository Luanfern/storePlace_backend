import { PrismaClient } from "@prisma/client";

export class ProductRepository {
    private prisma = new PrismaClient()
    async getAllProducts(searchBy: string, initial: number, quantity: number): Promise<any> {
        const getProducts = await this.prisma.product.findMany({
            where: {
                'name': {
                    'contains': searchBy != '*' ? searchBy : '',
                    'mode': "insensitive", 
                },
            },
            skip: initial,
            take: quantity,
        })

        const countProducts = await this.prisma.product.count({
            where: {
                'name': {
                    'contains': searchBy != '*' ? searchBy : '',
                    'mode': "insensitive", 
                },
            },
        })

        return {products: getProducts, count: countProducts}
    }

    async getAllProductsByCat(searchBy: number, initial: number, quantity: number): Promise<any> {
        const getProducts = await this.prisma.product.findMany({
            where: {
                category_id: {
                    hasEvery: searchBy
                },
            },
            skip: initial,
            take: quantity,
        })
        const countProducts = await this.prisma.product.count({
            where: {
                category_id: {
                    hasEvery: searchBy
                },
            },
        })

        return {products: getProducts, count: countProducts}
    }

    async getProduct(searchBy: string): Promise<any> {
        const getProduct = await this.prisma.product.findUniqueOrThrow({
            where: {
                code: searchBy,
            },
        })

        return  getProduct
    }

    
}