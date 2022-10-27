import { ExtractRepository } from "../repositories/Extract-repository/extract-repository"

export class Extract{
    async getExtracts(idUser: number): Promise<any> {
        let extracts: any 
        const extractRepository = new ExtractRepository()
        await extractRepository.getExtracts(idUser).then((ex) => {extracts = ex})
        console.log(extracts[0].listProducts)
        await extractRepository.getExtractPriceProducts(extracts[0].listProducts.join(',')).then((listP) => {
            console.log(extracts[0])
            extracts[0].listProducts = listP
        })

        console.log(extracts)
        return extracts
    }

    async saveExtract(idUser: number, productsIds: Array<number>): Promise<any> {
        const extractRepository = new ExtractRepository()
        const productList = productsIds.join(',')
        const productsPriceSum = await extractRepository.getExtractSumPriceProducts(productList)
        return await extractRepository.saveExtracts(idUser, productsPriceSum, productList)
    }
}