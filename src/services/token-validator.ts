import { TokenFunctions } from "./Functions/token-functions"
import { Login } from "./login"

export class TokenValidator{

    public async handle(bearerToken: string): Promise<any> {
        try {
            const verifyToken = new TokenFunctions().verifyToken(bearerToken) as any
            const id = verifyToken.id.id
            const login = await new Login().loginById(id).then(
                ac => {
                    return ac
                }
            )
            return login
        } catch (error: any) {
            if (error['message'] == 'jwt expired') {
                return 'Token de acesso expirado! Logue para gerar um novo token.'
            }
                return 'Ocorreu um erro no servidor!'
        }
    }
}