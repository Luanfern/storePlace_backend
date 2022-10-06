require('dotenv').config()
import * as jwt from "jsonwebtoken"

export class TokenFunctions{
    public generateToken(payloadContentID: Object){
        try {
            const keySecret = process.env.GENERAL_KEY
            var token = jwt.sign(
                {
                    id: payloadContentID,
                },
                keySecret!,
                {expiresIn: '12h'}
            );
            return token
        } catch (error) {
            throw error
        }
    }

    public decodeToken(token: string){
        try {
            var decode = jwt.decode(token);
            return decode
        } catch (error) {
            throw error
        }
    }

    public verifyToken(token: string){
        try {
            const keySecret = process.env.GENERAL_KEY
            var verify = jwt.verify(
                token,
                keySecret!
            );
            return verify
        } catch (error) {
            throw error
        }
    }
}