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
                saldo: req.saldo
            })
            console.log('controller!')
            response.status(200).send(register)
        } catch (error) {
            response.status(200).send(error)
        }
    }
}