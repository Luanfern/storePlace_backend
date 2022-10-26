import { Request, Response } from "express";
import { ShoppingKart } from "../../services/shopping -kart";

export class ShoppingKartController{
    public async getShoppingkart(request: Request, response: Response){
        const service = new ShoppingKart()
        try {
            const id = response.locals.token.id
            const kartId = await service.getIdShoppingKart(id)
            const getKart = await service.getShoppingKartItems(kartId)
            response.status(200).send({products: getKart})
        } catch (error) {
            console.log(error)
            response.status(200).send(error)
        }
    }

    public async addToShoppingkart(request: Request, response: Response){
        const service = new ShoppingKart()
        try {
            const id = response.locals.token.id
            const kartId = await service.getIdShoppingKart(id)
            const addToKart = await service.saveShoppingKartItem(kartId, request.body.productId)
            response.status(200).send({status: 'ok', return : addToKart})
        } catch (error) {
            response.status(200).send(error)
        }
    }

    public async removeFromShoppingkart(request: Request, response: Response){
        const service = new ShoppingKart()
        try {
            const id = response.locals.token.id
            const kartId = await service.getIdShoppingKart(id)
            const addToKart = await service.removeShoppingKartItem(kartId, request.body.productId)
            response.status(200).send({status: 'ok', return : addToKart})
        } catch (error) {
            response.status(200).send(error)
        }
    }
}