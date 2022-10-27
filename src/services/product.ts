import { IProduct } from "../Interfaces/IProduct"
import { ExtractRepository } from "../repositories/Extract-repository/extract-repository"
import { ProductRepository } from "../repositories/Product-repository/product-repository"
import { ShoppingKartRepository } from "../repositories/Shopping-Kart-repository/shopping-kart-repository"
import { UserRepository } from "../repositories/User-repository/user-repository"

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

    async buyProduct(userId: number): Promise<any> {
        const userRepo = new UserRepository()
        const shoppingKartRepo = new ShoppingKartRepository()
        const extractRepo = new ExtractRepository()

        try {
            const userInfos = await userRepo.getInfoById(userId)
            const productsIdsShoppingKart = await shoppingKartRepo.getKartProductsId(userInfos.shoppingKartId)

            if (productsIdsShoppingKart <= 0) return {status: false, message: 'Sem produtos adicionados ao Carrinho!.'}

            const productsIds = productsIdsShoppingKart.join(',')
            const productsSumShoppingKart = await this.repository.getSumPriceProducts(productsIds)

            if (userInfos.currency - productsSumShoppingKart < 0) {
                return {status: false, message: 'sem créditos suficientes.'}
            }

            await userRepo.updateCurrency(userId, userInfos.currency - productsSumShoppingKart)
            await extractRepo.saveExtracts(userId, productsSumShoppingKart, productsIds)
            await shoppingKartRepo.saveItemKart(userInfos.shoppingKartId, '{}')

            return {status: true, message: 'compra realizada com sucesso!'}
        } catch (error) {
            throw {status: false, message: 'Ocorreu algum erro'};
            
        }
    }
}