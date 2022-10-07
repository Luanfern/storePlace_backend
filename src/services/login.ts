import { CryptoFunctions } from "./Functions/crypto-functions";
import { TokenFunctions } from "./Functions/token-functions";
import { IUsuario } from "../Interfaces/IUsuario"
import { LoginRepository } from "../repositories/Auth-repository/Login-repository"

export class Login{
    
    constructor(){}

    async login(login: IUsuario): Promise<any> {
        try {
            let loginUser = login;
            loginUser.password = new CryptoFunctions().encript(login.password)
            const loginRepository = await new LoginRepository().handle(loginUser)
            const loginToken = new TokenFunctions().generateToken(loginRepository)
            return loginToken
        } catch (error) {
            throw error
        }
    }        

}