import { IUsuario } from "./Interfaces/IUsuario"

export class Login{
    
    constructor(){}

    login(login: IUsuario): any {
        return { login: login.name }
    }        

}