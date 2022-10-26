import { Request, Response } from "express";
import { Category } from "../../services/category";

export class CategoriesController{
    public async listCategories(request: Request, response: Response){
        const service = new Category()
        try {
            const listCategories = await service.listCategories()
            response.status(200).send(listCategories)
        } catch (error) {
            response.status(200).send(error)
        }
    }
}