import { Request, Response } from "express";
import { User } from "../../services/user";

export class UserController {
    public async updateCurrency(request: Request, response: Response) {
        try {
            const id = response.locals.token.id
            const req = request.body
            await new User().currency(id, req.currency)
            response.status(200).send({status: true})
        } catch (error: any) {
            response.status(400).send({erro:error.message, status: false})
        }
    }
}