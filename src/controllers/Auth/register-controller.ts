import { NextFunction, Request, Response } from "express";
import { Register } from "../../lib/register";

export class RegisterController{
    public register(request: Request, response: Response, next: NextFunction){
        try {
            const req = request.body
            const register = new Register().register({ name: req.name, email: req.email, password: req.password, telefone: req.telefone, saldo: req.saldo})
            response.status(200).send(register)
        } catch (error) {
            response.status(200).send(error)
        }
    }
}