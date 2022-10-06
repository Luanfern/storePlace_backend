import { NextFunction, Request, Response } from "express";
import { TokenFunctions } from "../Functions/token-functions";

export class MiddlewareToken{
    public handle(request: Request, response: Response, next: NextFunction){
        if (request.headers['authorization']) {
            const bearerToken = request.headers['authorization']?.split(" ")[1]
            try {
                const verifyToken = new TokenFunctions().verifyToken(bearerToken)
                console.log(verifyToken)
                next()
            } catch (error: any) {
                if (error['message'] == 'jwt expired') {
                    return response.status(200).send({status: 'erro', msg: 'Token de acesso expirado! Logue para gerar um novo token.'})    
                }
                    return response.status(200).send({msg: 'Ocorreu um erro no servidor!'})    
            }
        }else {
            return response.status(200).send({msg: 'no token to Validate!'})
        }
    }
}