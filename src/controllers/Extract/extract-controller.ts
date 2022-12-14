import { Request, Response } from "express";
import { Extract } from "../../services/extract";

export class ExtractController{
    public async getExtracts(request: Request, response: Response){
        const service = new Extract()
        try {
            const id = response.locals.token.id
            const extracts = await service.getExtracts(id)
            response.status(200).send(extracts)
        } catch (error) {
            response.status(200).send({status: "error"})
        }
    }

    public async getExtractsInfos(request: Request, response: Response){
        const service = new Extract()
        try {
            const extracts = await service.getExtractInfo(request.body.extractId)
            response.status(200).send(extracts)
        } catch (error) {
            response.status(200).send({status: "error"})
        }
    }
}