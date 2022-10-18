import { PrismaClient } from "@prisma/client";

export class ProductRepository {
    async getAllProducts(searchBy: string): Promise<any> {
        const prisma = new PrismaClient()
        const getProducts = await prisma.product.findMany({
            where: {
                'name': {
                    'contains': searchBy != '*' ? searchBy : '',
                    'mode': "insensitive", 
                },
            }
        })

        return getProducts
    }
    
}