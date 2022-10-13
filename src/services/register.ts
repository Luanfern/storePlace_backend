import { CryptoFunctions } from "./Functions/crypto-functions";
import { TokenFunctions } from "./Functions/token-functions";
import { IUsuario } from "../Interfaces/IUsuario";
import { RegisterRepository } from "../repositories/Auth-repository/Register-repository";

export class Register{
    
    constructor(){ }

    async register(register: IUsuario): Promise<any> {
        try {            
            let registerUser = register;
            registerUser.password = new CryptoFunctions().encript(register.password)
            const getFromRepRegister = await new RegisterRepository().handle(registerUser).
            then(acc => {
                console.log('ID')
                console.log('ID')
                console.log(acc)
                console.log('ID')
                console.log('ID')
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