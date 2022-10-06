import { CryptoFunctions } from "../controllers/Functions/crypto-functions";
import { IUsuario } from "../Interfaces/IUsuario"
import { LoginRepository } from "../repositories/Auth-repository/Login-repository"

export class Login{
    
    constructor(){}

    async login(login: IUsuario): Promise<any> {
        try {
            let loginUser = login;
            loginUser.password = new CryptoFunctions().encript(login.password)
            const loginRepository = await new LoginRepository().handle(loginUser)
            return loginRepository
        } catch (error) {
            throw error
        }
    }        

}