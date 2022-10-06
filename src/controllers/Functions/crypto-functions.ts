import * as crypto from "crypto"

export class CryptoFunctions{

    public encript(forEncriptDecript: string) {
        const cipher = crypto.createCipheriv('aes-128-cbc', crypto.scryptSync(forEncriptDecript, 'storePlaceCryptoKey', 16), Buffer.alloc(16, 0))
        let update = cipher.update(forEncriptDecript, 'utf8', 'hex')
        update += cipher.final('hex')
        return update
    }
}