import { NextFunction, Request, Response } from "express";
import { Login } from "../../lib/login";

export class LoginController{
    public login(request: Request, response: Response, next: NextFunction) {
        try {
            const req = request.body
            const login = new Login().login({ name: req.name, password: req.password})
            return response.status(200).send(login)
        } catch (error) {
            return response.status(200).send(error)
        }
    }
}