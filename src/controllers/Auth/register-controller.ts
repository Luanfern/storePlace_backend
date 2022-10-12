import { NextFunction, Request, Response } from "express";
import { Register } from "../../services/register";

export class RegisterController{
    public async register(request: Request, response: Response, next: NextFunction){
        try {
            const req = request.body
            const register = await new Register().register({
                name: req.name,
                email: req.email,
                password: req.password,
                telefone: req.telefone,
                currency: req.currency
            })
            console.log('controller!')
            response.status(200).send({token: register})
        } catch (error: any) {
            response.status(400).send({erro: error.message})
        }
    }

    public async existEmail(request: Request, response: Response){
        try {
            const req = request.body
            const emailExist = await new Register().existEmail(req.email)
            if (emailExist > 0) {
                response.status(200).send(false)   
            }else {
                response.status(200).send(true)
            }  
        } catch (error: any) {
            response.status(400).send({erro: error.message})
        }
    }
}