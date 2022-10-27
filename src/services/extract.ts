import { ExtractRepository } from "../repositories/Extract-repository/extract-repository"

export class Extract{
    async getExtracts(idUser: number): Promise<any> {
        const extractRepository = new ExtractRepository()
        const extracts = await extractRepository.getExtracts(idUser)
        return extracts
    }

    async getExtractInfo(idExtract: number): Promise<any> {
        let extracts: any 
        const extractRepository = new ExtractRepository()
        await extractRepository.getExtract(idExtract).then((ex) => {extracts = ex})
        await extractRepository.getExtractPriceProducts(extracts.listProducts.join(',')).then((listP) => {
            extracts.listProducts = listP
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