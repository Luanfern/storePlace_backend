import { ExtractRepository } from "../repositories/Extract-repository/extract-repository"

export class Extract{
    async getExtracts(idUser: number): Promise<any> {
        const extractRepository = new ExtractRepository()
        const getExtracts = await extractRepository.getExtracts(idUser)
        return getExtracts
    }

    async saveExtract(idUser: number, productsIds: Array<number>): Promise<any> {
        const extractRepository = new ExtractRepository()
        const productList = productsIds.join(',')
        const productsPriceSum = await extractRepository.getExtractSumPriceProducts(productList)
        return await extractRepository.saveExtracts(idUser, productsPriceSum, productList)
    }
}