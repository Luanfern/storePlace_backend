import { NextFunction, Request, Response } from "express";
import { Product } from "../../services/product";

export class ProductController{
    public async getProduct(request: Request, response: Response, next: NextFunction){
        const service = new Product()
        try {
            const id = request.params.id
            const product = await service.readProduct(true, id)
            response.status(200).send(product)
        } catch (error) {
            response.status(200).send(error)
        }
    }

    public async getAllProduct(request: Request, response: Response, next: NextFunction){
        const service = new Product()
        try {
            const search = request.params.search ?? '*'
            console.log('SEARCH: ',search)
            const read = await service.readProduct(false, search, request.body.pagination)
            response.status(200).send(read)
        } catch (error) {
            response.status(200).send(error)
        }
    }

    public async getAllProductbyCat(request: Request, response: Response, next: NextFunction){
        const service = new Product()
        try {
            const search = parseInt(request.params.search)
            console.log('SEARCH: ',search)
            const read = await service.readProductByCat(search, request.body.pagination)
            response.status(200).send(read)
        } catch (error) {
            response.status(200).send(error)
        }
    }

    public deleteProduct(request: Request, response: Response, next: NextFunction){
        const service = new Product()
        try {
            const params = request.body
            const del = service.deleteProduct(params.userId, params.productId)
            response.status(200).send(del)
        } catch (error) {
            response.status(200).send(error)   
        }
    }

    public editProduct(request: Request, response: Response, next: NextFunction){
        const service = new Product()
        try {
            const params = request.body
            const edit = service.updateProduct(params.userId, params.productId, params.dataProduct)
            response.status(200).send(edit)
        } catch (error) {
            response.status(200).send(error)   
        }
    }

    public publishProduct(request: Request, response: Response, next: NextFunction){
        const service = new Product()
        try {
            const params = request.body
            const edit = service.createProduct(params.userId, params.dataProduct)
            response.status(200).send(edit)
        } catch (error) {
            response.status(200).send(error)   
        }
    }

    public buyProduct(request: Request, response: Response, next: NextFunction){
        const service = new Product()
        response.status(200).send({return: 'buy Product'})
    }
}