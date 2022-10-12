import { NextFunction, Request, Response } from "express";
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
            response.status(200).send({token: login})
        } catch (error: any) {
            response.status(400).send({erro:error.message})
        }
    }

    public async loginByToken(request: Request, response: Response) {
        try {
            console.log(request.headers['authorization'])
            console.log(request.headers)
            if (request.headers['authorization']) {
                const bearerToken = request.headers['authorization']?.split(" ")[1]
                const validate = await new TokenValidator().handle(bearerToken).
                then(
                    valid => {
                        return valid
                    }
                )
                console.log(validate)
                if (validate != null) {
                    return response.status(200).send(validate)
                } else {
                    return response.status(200).send({msg: 'ERRO'})
                }
            }else {
                return response.status(200).send({msg: 'no token to Validate!'})
            }
        } catch (error: any) {
            response.status(400).send({erro:error.message})
        }
    }
}