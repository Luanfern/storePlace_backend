import { TokenFunctions } from "./Functions/token-functions"
import { Login } from "./login"

export class TokenValidator{

    public async handle(bearerToken: string): Promise<any> {
        try {
            const verifyToken = new TokenFunctions().verifyToken(bearerToken) as any
            const id = verifyToken.id
            return id
        } catch (error: any) {
            console.log('erro', error)
            if (error['message'] == 'jwt expired') {
                return {error: 'Token de acesso expirado! Logue para gerar um novo token.', status: false}
            }
            console.log(error)
            throw Error('Ocorreu um erro no servidor!')
        }
    }
}