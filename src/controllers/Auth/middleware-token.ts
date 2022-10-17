import { NextFunction, Request, Response } from "express";
import { TokenValidator } from "../../services/token-validator";

export class MiddlewareToken{
    public async handle(request: Request, response: Response, next: NextFunction){
       try {
        if (request.headers['authorization']) {
            const bearerToken = request.headers['authorization']?.split(" ")[1]
            const validate = await new TokenValidator().handle(bearerToken).
            then(
                valid => {
                    return valid
                }
            )
            if (validate != null) {
                response.locals.token = {token: bearerToken, id: validate}
                if (validate.error) {
                    return response.status(200).send({error: validate.error, status: false})   
                }
                next()
            } else {
                return response.status(200).send({error: 'ERRO', status: false})
            }
        }else {
            return response.status(200).send({msg: 'no token to Validate!', status: false})
        }
       } catch (error: any) {
        console.log(error)
        return response.status(200).send({error: error.message, status: false})
        
       }
    }
}