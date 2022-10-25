import { CryptoFunctions } from "./Functions/crypto-functions";
import { TokenFunctions } from "./Functions/token-functions";
import { IUsuario } from "../Interfaces/IUsuario";
import { RegisterRepository } from "../repositories/Auth-repository/Register-repository";
import { ShoppingKart } from "./shopping -kart";

export class Register{
    
    constructor(){ }

    async register(register: IUsuario): Promise<any> {
        try {
            const kartId = await new ShoppingKart(0).createShoppingKart()

            let registerUser = register;
            registerUser.password = new CryptoFunctions().encript(register.password)
            const getFromRepRegister = await new RegisterRepository().handle(registerUser, kartId).
            then(acc => {
                return new TokenFunctions().generateToken(acc)
            })
            return getFromRepRegister
        } catch (error: any) {
            console.log(error)
            if (error.code == 'P2002') {
                throw Error(`Informação já está sendo usada por outro usuário!`)
            }
            throw Error(`Problemas com o servidor!`)   
        }
    }

    async existEmail(email: string): Promise<any> {
        try {            
            const existEmailQuantity = await new RegisterRepository().verifyExistEmail(email)
            return existEmailQuantity
        } catch (error: any) {
            throw Error(`Problemas com o servidor!`)   
        }
    }
}