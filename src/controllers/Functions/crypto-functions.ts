import * as crypto from "crypto"
require('dotenv').config()

export class CryptoFunctions{

    public encript(forEncriptDecript: string) {
        const keyBinary = process.env.GENERAL_KEY
        const cipher = crypto.createCipheriv('aes-128-cbc', crypto.scryptSync(forEncriptDecript, keyBinary!, 16), Buffer.alloc(16, 0))
        let update = cipher.update(forEncriptDecript, 'utf8', 'hex')
        update += cipher.final('hex')
        return update
    }
}