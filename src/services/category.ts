import { CategoryRepository } from "../repositories/Category-repository/category-repository";

export class Category{
    
    constructor(){ }

    async listCategories(): Promise<any> {
        try {            
            const list = await new CategoryRepository().getCategories()
            return list
        } catch (error: any) {
            throw Error(`Problemas com o servidor!`)   
        }
    }
}