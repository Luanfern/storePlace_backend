import { IUsuario } from "../Interfaces/IUsuario"
import { LoginRepository } from "../repositories/Auth-repository/Login-repository"

export class Login{
    
    constructor(){}

    async login(login: IUsuario): Promise<any> {
        try {
            const loginRepository = await new LoginRepository().handle(login)
        return loginRepository
        } catch (error) {
            throw error
        }
    }        

}