import { IUsuario } from "./Interfaces/IUsuario";

export class Register{
    
    constructor(){ }

    register(register: IUsuario): any {
        return {register: register.name}
    }
}