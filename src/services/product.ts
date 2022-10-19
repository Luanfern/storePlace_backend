import { IProduct } from "../Interfaces/IProduct"
import { ProductRepository } from "../repositories/Product-repository/product-repository"

export class Product {

    constructor() { }

    async readProduct(uniqueReturn: boolean = false, searchBy: string, pagination: number[]): Promise<any> {
        if (uniqueReturn) {
            return { returnOne: searchBy }
        } else {
            const products = await new ProductRepository().getAllProducts(searchBy, pagination[0], pagination[1])
            return products
        }
    }

    async readProductByCat(searchBy: number, pagination: number[]): Promise<any> {
        const products = await new ProductRepository().getAllProductsByCat(searchBy, pagination[0], pagination[1])
        return products
    }

    updateProduct(userId: number, productId: number, dataProduct: IProduct): any {
        return { userId: userId, productId: productId, dataProductName: dataProduct.name }
    }

    createProduct(userId: number, dataProduct: IProduct): any {
        return { return: `usuario ${userId} criou: ${dataProduct.name}` }
    }

    deleteProduct(userId: number, productId: number): any {
        return { userId: userId, productId: productId }
    }
    //create purchase
}