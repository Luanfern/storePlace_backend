import { IUsuario } from "../Interfaces/IUsuario";
import { UserRepository } from "../repositories/User-repository/user-repository";

export class User {

    constructor() { }

    async currency(id: number, updateCurrencyValue: number): Promise<any> {
        try {
            const getCurrency = await new UserRepository().getInfoById(id).
                then(async (c: IUsuario) => {
                    const valueCurrency = c.currency! + updateCurrencyValue
                    const currency = await new UserRepository().updateCurrency(id, valueCurrency).
                        then(c => {
                            return c
                        })
                    return currency
                })
            return getCurrency
        } catch (error: any) {
            console.log(error)
            if (error.code == 'P2002') {
                throw Error(`Informação já está sendo usada por outro usuário!`)
            }
            throw Error(`Problemas com o servidor!`)
        }
    }
}