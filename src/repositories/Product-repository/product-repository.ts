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

        return getProducts
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

        return getProducts
    }
    
}