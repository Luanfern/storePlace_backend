import { CryptoFunctions } from "../controllers/Functions/crypto-functions";
import { IUsuario } from "../Interfaces/IUsuario";
import { RegisterRepository } from "../repositories/Auth-repository/Register-repository";

export class Register{
    
    constructor(){ }

    async register(register: IUsuario): Promise<any> {
        try {            
            let registerUser = register;
            registerUser.password = new CryptoFunctions(register.password).encript()
            //const getFromRepRegister = await new RegisterRepository().handle()
            //return  {id: getFromRepRegister}
            return {'en': registerUser.password, 'de': new CryptoFunctions(registerUser.password).decript()}
            //return {'en': new CryptoFunctions(register.password).encript(), 'de': new CryptoFunctions(registerUser.password).decript()}
        } catch (error) {
            throw error
        }
    }
}