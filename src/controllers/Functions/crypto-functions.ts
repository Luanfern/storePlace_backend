import * as crypto from "crypto"

export class CryptoFunctions{

    constructor(private forEncriptDecript: string){}

    private cipher = crypto.createCipheriv('aes-128-cbc', crypto.scryptSync(this.forEncriptDecript, 'storePlaceCryptoKey', 16), Buffer.alloc(16, 0))
    private decipher = crypto.createDecipheriv('aes-128-cbc', crypto.scryptSync(this.forEncriptDecript, 'storePlaceCryptoKey', 16), Buffer.alloc(16, 0))

    public encript() {
        let update = this.cipher.update(this.forEncriptDecript, 'utf8', 'hex')
        update += this.cipher.final('hex')
        return update
    }
    public decript() {
        let update = this.decipher.update(this.forEncriptDecript, 'hex', 'utf8')
        update += this.decipher.final('utf8')
        return update
    }
}