import { NextFunction, Request, Response } from "express";
import { TokenFunctions } from "../../services/Functions/token-functions";
import { Login } from "../../services/login";
import { TokenValidator } from "../../services/token-validator";

export class LoginController {
    public async login(request: Request, response: Response, next: NextFunction) {
        try {
            const req = request.body
            const login = await new Login().login({
                email: req.email,
                password: req.password
            })
            response.status(200).send({token: login, status: true})
        } catch (error: any) {
            response.status(400).send({erro:error.message, status: false})
        }
    }

    public async loginByToken(request: Request, response: Response) {
        try {
            const id = response.locals.token.id
            console.log('tk bearer-id', id)
            if (id) {
                const validate = await new Login().loginById(id).then(ac => {return ac})
                if (validate != null) {
                    return response.status(200).send(validate.error ? {error: validate.error, status: false} : {acc: validate, status: true,  ignore: true})
                } else {
                    return response.status(200).send({error: 'ERRO', status: false})
                }
            }else {
                return response.status(200).send({error: 'Sem token para validar!', status: false, ignore: true})
            }
        } catch (error: any) {
            console.log(error.message)
            response.status(400).send({error:error.message, status: false})
        }
    }
}