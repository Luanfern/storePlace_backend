import { ShoppingKartRepository } from '../repositories/Shoppin-Kart-repository'

export class ShoppingKart{
    private repository = new ShoppingKartRepository()
    async getShoppingKartItems(idShoppingKart: number): Promise<any> {
        const ids = await this.repository.getKartProductsId(idShoppingKart)
        console.log(ids)
        if (ids.length == 0) {
            return 'Sem produtos em seu carrinho'
        }
        const forQuery = ids.join(',')
        console.log(forQuery)
        return await this.repository.getKartProducts(forQuery)
    }

    async saveShoppingKartItem(idShoppingKart: number, productId: number): Promise<any> {
       try {
            const ids = await this.repository.getKartProductsId(idShoppingKart)
            ids.push(productId)
            console.log(ids)
            const allProducts = ids.join(',')
            return await this.repository.saveItemKart(idShoppingKart, `{${allProducts}}`)
       } catch (error) {
            throw error;            
       }
    }

    async removeShoppingKartItem(idShoppingKart: number, productId: number): Promise<any> {
        try {
             const ids = await this.repository.getKartProductsId(idShoppingKart)
             ids.filter((val: any, i: any) =>{
                if (val == productId) {
                    ids.splice(i, 1)
                    console.log(ids[i]+ 'removendo esse aqui!')
                }
             })
             console.log(ids)
             const allProducts = ids.join(',')
             return await this.repository.removeItemKart(idShoppingKart, `{${allProducts}}`)
        } catch (error) {
             throw error;            
        }
     }
    
    async createShoppingKart(): Promise<any> {
        return await this.repository.createKart()
    }

    async getIdShoppingKart(idUser: number): Promise<any> {
        return await this.repository.getIdKart(idUser)
    }
}