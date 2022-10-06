import { CryptoFunctions } from "../controllers/Functions/crypto-functions";
import { IUsuario } from "../Interfaces/IUsuario";
import { RegisterRepository } from "../repositories/Auth-repository/Register-repository";

export class Register{
    
    constructor(){ }

    async register(register: IUsuario): Promise<any> {
        try {            
            let registerUser = register;
            registerUser.password = new CryptoFunctions().encript(register.password)
            const getFromRepRegister = await new RegisterRepository().handle(registerUser)
            return  {id: getFromRepRegister}
        } catch (error) {
            throw error
        }
    }
}