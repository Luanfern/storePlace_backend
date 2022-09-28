import express, { NextFunction, Request, Response } from "express";
import { LoginController } from "./controllers/Auth/login-controller";
import { RegisterController } from "./controllers/Auth/register-controller";
import { ProductController } from "./controllers/Product/product-controller";

const router: express.IRouter = express.Router()

//HOME
router.get('', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('HOME')
})

//LOGIN
router.post('/login/', new LoginController().login)

//REGISTER
router.post('/register/', new RegisterController().register)

//PRODUCT
router.get('/product/:id', new ProductController().getProduct)
router.get('/products/:search?', new ProductController().getAllProduct)
router.post('/product/delete', new ProductController().deleteProduct)
router.post('/product/edit', new ProductController().editProduct)
router.post('/product/publish', new ProductController().publishProduct)
router.post('/product/buy', new ProductController().buyProduct)
export { router }