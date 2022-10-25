import { isTypedArray } from 'util/types'
import { ShoppingKartRepository } from '../repositories/Shoppin-Kart-repository'

export class ShoppingKart{

    public id: number = 0

    constructor(idShoppingKart: number){
        this.id = idShoppingKart
    }

    async getShoppingKartItems(): Promise<any> {
        const ids = await new ShoppingKartRepository().getKartProductsId(this.id)
        console.log(ids)
        if (ids.length == 0) {
            return 'Sem produtos em seu carrinho'
        }
        const forQuery = ids.join(',')
        return await new ShoppingKartRepository().getKartProducts(forQuery)
    }

    async saveShoppingKartItem(productId: number): Promise<any> {
       try {
            const ids = await new ShoppingKartRepository().getKartProductsId(this.id)
            ids.push(productId)
            console.log(ids)
            const allProducts = ids.join(',')
            return await new ShoppingKartRepository().saveItemKart(this.id, `{${allProducts}}`)
       } catch (error) {
            throw error;            
       }
    }

    async removeShoppingKartItem(productId: number): Promise<any> {
        try {
             const ids = await new ShoppingKartRepository().getKartProductsId(this.id)
             ids.filter((val: any, i: any) =>{
                if (val == productId) {
                    ids.splice(i, 1)
                    console.log(ids[i]+ 'removendo esse aqui!')
                }
             })
             console.log(ids)
             const allProducts = ids.join(',')
             return await new ShoppingKartRepository().removeItemKart(this.id, `{${allProducts}}`)
        } catch (error) {
             throw error;            
        }
     }
    
    async createShoppingKart(): Promise<any> {
        return await new ShoppingKartRepository().createKart()
    }
}