import { CryptoFunctions } from "./Functions/crypto-functions";
import { TokenFunctions } from "./Functions/token-functions";
import { IUsuario } from "../Interfaces/IUsuario"
import { LoginRepository } from "../repositories/Auth-repository/Login-repository"

export class Login{
    private repository = new LoginRepository()
    async login(login: IUsuario): Promise<any> {
        try {
            let loginUser = login;
            loginUser.password = new CryptoFunctions().encript(login.password)
            const loginRepository = await this.repository.handle(loginUser)
            console.log(loginRepository)
            const loginToken = new TokenFunctions().generateToken(loginRepository)
            return loginToken
        } catch (error: any) {
            console.log(error.name)
            if (error.name == 'Error') {
                throw Error(`Problemas na conexão com o servidor!`)
            }
            switch (error.message) {
                case 'No User found':
                    throw Error(`Usuário não encontrado.`)
                default:
                    throw Error(`Ocorreu algum problema. Tente novamente mais tarde!`)
            }
        }
    }

    async loginById(id: number): Promise<any> {
        try {
            const loginByIdRepository = await this.repository.loginById(id)
            return loginByIdRepository
        } catch (error: any) {
            if (error.name == 'Error') {
                console.log(error)
                throw Error(`Problemas na conexão com o servidor!`)
            }
            switch (error.message) {
                case 'No User found':
                    throw Error(`Usuário não encontrado.`)
                default:
                    throw Error(`Ocorreu algum problema. Tente novamente mais tarde!`)
            }
        }
    }
}