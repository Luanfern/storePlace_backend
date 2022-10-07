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
        } catch (error) {
            throw error
        }
    }
}