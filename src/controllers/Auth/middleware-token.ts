import { NextFunction, Request, Response } from "express";
import { TokenFunctions } from "../../services/Functions/token-functions";
import { TokenValidator } from "../../services/token-validator";

export class MiddlewareToken{
    public async handle(request: Request, response: Response, next: NextFunction){
        if (request.headers['authorization']) {
            const bearerToken = request.headers['authorization']?.split(" ")[1]
            const validate = await new TokenValidator().handle(bearerToken).
            then(
                valid => {
                    return valid
                }
            )
            console.log(validate)
            if (validate == null) {
                next()
            } else {
                return response.status(200).send({erro: validate})
            }
        }else {
            return response.status(200).send({msg: 'no token to Validate!'})
        }
    }
}