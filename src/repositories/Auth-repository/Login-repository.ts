import { PrismaClient } from "@prisma/client";
import { IUsuario } from "../../Interfaces/IUsuario";

export class LoginRepository {
    private prisma = new PrismaClient()
    async handle(login: IUsuario): Promise<any> {
        const loginRequest = await this.prisma.user.findFirstOrThrow({
            where: {
                AND: [
                    {email: login.email},
                    {password: login.password}
                ]
            },
            select: {
                id: true,
            }
        })

        return loginRequest.id
    }

    async loginById(id: number): Promise<any> {
        const loginByIdRequest = await this.prisma.user.findFirstOrThrow({
            where: {
                id
            },
            select: {
                name: true,
                email: true,
                password: true,
                telefone: true,
                currency: true,
            }
        })
        return loginByIdRequest
    }
}