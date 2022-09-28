import { IProduct } from "./Interfaces/IProduct"

export class Product{
    
    constructor(){}

    readProduct(uniqueReturn: boolean = true, searchBy: string): any{
        if (uniqueReturn) {
            return {returnOne: searchBy}
        } else{
            return {return: searchBy}
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