import { NextFunction, Request, Response } from "express";
import { Product } from "../../services/product";

export class ProductController{
    public getProduct(request: Request, response: Response, next: NextFunction){
        try {
            const id = request.params.id
            const read = new Product().readProduct(true, id)
            response.status(200).send(read)
        } catch (error) {
            response.status(200).send(error)
        }
    }

    public getAllProduct(request: Request, response: Response, next: NextFunction){
        try {
            const search = request.params.search ?? '*'
            const read = new Product().readProduct(false, search)
            response.status(200).send(read)
        } catch (error) {
            response.status(200).send(error)
        }
    }

    public deleteProduct(request: Request, response: Response, next: NextFunction){
        try {
            const params = request.body
            const del = new Product().deleteProduct(params.userId, params.productId)
            response.status(200).send(del)
        } catch (error) {
            response.status(200).send(error)   
        }
    }

    public editProduct(request: Request, response: Response, next: NextFunction){
        try {
            const params = request.body
            const edit = new Product().updateProduct(params.userId, params.productId, params.dataProduct)
            response.status(200).send(edit)
        } catch (error) {
            response.status(200).send(error)   
        }
    }

    public publishProduct(request: Request, response: Response, next: NextFunction){
        try {
            const params = request.body
            const edit = new Product().createProduct(params.userId, params.dataProduct)
            response.status(200).send(edit)
        } catch (error) {
            response.status(200).send(error)   
        }
    }

    public buyProduct(request: Request, response: Response, next: NextFunction){
        response.status(200).send({return: 'buy Product'})
    }
}