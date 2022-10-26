import { PrismaClient } from "@prisma/client";

export class CategoryRepository {
    private prisma = new PrismaClient()
    async getCategories(): Promise<any> {
        const getCategories = await this.prisma.category.findMany()
        return getCategories
    }
}