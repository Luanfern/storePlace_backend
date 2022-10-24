import { PrismaClient } from "@prisma/client";

export class ProductRepository {
    async getAllProducts(searchBy: string, initial: number, quantity: number): Promise<any> {
        const prisma = new PrismaClient()
        const getProducts = await prisma.product.findMany({
            where: {
                'name': {
                    'contains': searchBy != '*' ? searchBy : '',
                    'mode': "insensitive", 
                },
            },
            skip: initial,
            take: quantity,
        })

        const countProducts = await prisma.product.count({
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
        const prisma = new PrismaClient()
        const getProducts = await prisma.product.findMany({
            where: {
                category_id: {
                    hasEvery: searchBy
                },
            },
            skip: initial,
            take: quantity,
        })
        const countProducts = await prisma.product.count({
            where: {
                category_id: {
                    hasEvery: searchBy
                },
            },
        })

        return {products: getProducts, count: countProducts}
    }

    async getProduct(searchBy: number): Promise<any> {
        const prisma = new PrismaClient()
        const getProduct = await prisma.product.findUniqueOrThrow({
            where: {
                id: searchBy,
            },
        })

        return {product: getProduct}
    }

    
}