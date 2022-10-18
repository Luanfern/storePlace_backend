import { PrismaClient } from "@prisma/client";

export class CategoryRepository {
    async getCategories(): Promise<any> {
        const prisma = new PrismaClient()
        const getCategories = await prisma.category.findMany()
        return getCategories
    }
}