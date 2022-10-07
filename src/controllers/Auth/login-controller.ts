import { NextFunction, Request, Response } from "express";
import { Login } from "../../services/login";

export class LoginController {
    public async login(request: Request, response: Response, next: NextFunction) {
        try {
            const req = request.body
            const login = await new Login().login({
                email: req.email,
                password: req.password
            })
            response.status(200).send({login})
        } catch (error: any) {
            response.status(400).send({erro:error.message})
        }
    }
}