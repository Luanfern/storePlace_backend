import { IProduct } from "../Interfaces/IProduct"
import { ProductRepository } from "../repositories/Product-repository/product-repository"

export class Product {
    private repository = new ProductRepository()
    async readProduct(uniqueReturn: boolean = false, searchBy: string, pagination: number[] = [0, 1]): Promise<any> {
        if (uniqueReturn) {
            const product = await this.repository.getProduct(searchBy)
            return product
        } else {
            const products = await this.repository.getAllProducts(searchBy, pagination[0], pagination[1])
            return products
        }
    }

    async readProductByCat(searchBy: number, pagination: number[]): Promise<any> {
        const products = await this.repository.getAllProductsByCat(searchBy, pagination[0], pagination[1])
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