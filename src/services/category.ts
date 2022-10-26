import { CategoryRepository } from "../repositories/Category-repository/category-repository";

export class Category{
    private repository = new CategoryRepository()
    async listCategories(): Promise<any> {
        try {            
            const list = await this.repository.getCategories()
            return list
        } catch (error: any) {
            throw Error(`Problemas com o servidor!`)   
        }
    }
}