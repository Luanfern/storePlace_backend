import { IProduct } from "../Interfaces/IProduct"
import { ProductRepository } from "../repositories/Product-repository/product-repository"

export class Product{
    
    constructor(){}

    async readProduct(uniqueReturn: boolean = false, searchBy: string): Promise<any>{
        if (uniqueReturn) {
            return {returnOne: searchBy}
        } else{
            const products = await new ProductRepository().getAllProducts(searchBy)
            return {return: products}
        }
    }

    updateProduct(userId: number, productId: number, dataProduct: IProduct): any{
        return {userId: userId, productId: productId, dataProductName: dataProduct.name}
    }

    createProduct(userId: number, dataProduct: IProduct): any{
        return { return: `usuario ${userId} criou: ${dataProduct.name}`}
    }

    deleteProduct(userId: number, productId: number): any{
        return {userId: userId, productId: productId}
    }
    //create purchase
}