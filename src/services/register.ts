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
            const getFromRepRegister = await new RegisterRepository().handle(registerUser)
            const generateToken = new TokenFunctions().generateToken(getFromRepRegister)
            return {generateToken}
        } catch (error: any) {
            console.log(error)
            if (error.code == 'P2002') {
                throw Error(`Informação já está sendo usada por outro usuário!`)
            }
            throw Error(`Problemas com o servidor!`)   
        }
    }
}