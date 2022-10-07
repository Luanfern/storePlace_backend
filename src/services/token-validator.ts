import { TokenFunctions } from "./Functions/token-functions"

export class TokenValidator{

    public async handle(bearerToken: string): Promise<any> {
        try {
            const verifyToken = new TokenFunctions().verifyToken(bearerToken)
            console.log(verifyToken)
            return null
        } catch (error: any) {
            if (error['message'] == 'jwt expired') {
                return 'Token de acesso expirado! Logue para gerar um novo token.'
            }
                return 'Ocorreu um erro no servidor!'
        }
    }
}