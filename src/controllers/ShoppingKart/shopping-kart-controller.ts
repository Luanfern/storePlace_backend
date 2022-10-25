import { Request, Response } from "express";
import { ShoppingKart } from "../../services/shopping -kart";

export class ShoppingKartController{
    public async getShoppingkart(request: Request, response: Response){
        try {
            const getKart = await new ShoppingKart(request.body.kartId).getShoppingKartItems()
            response.status(200).send({products: getKart})
        } catch (error) {
            response.status(200).send(error)
        }
    }

    public async addToShoppingkart(request: Request, response: Response){
        try {
            const addToKart = await new ShoppingKart(request.body.kartId).saveShoppingKartItem(request.body.productId)
            response.status(200).send({status: 'ok', return : addToKart})
        } catch (error) {
            response.status(200).send(error)
        }
    }

    public async removeFromShoppingkart(request: Request, response: Response){
        try {
            const addToKart = await new ShoppingKart(request.body.kartId).removeShoppingKartItem(request.body.productId)
            response.status(200).send({status: 'ok', return : addToKart})
        } catch (error) {
            response.status(200).send(error)
        }
    }
}