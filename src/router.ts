import express, { NextFunction, Request, Response } from "express";
import { LoginController } from "./controllers/Auth/login-controller";
import { MiddlewareToken } from "./controllers/Auth/middleware-token";
import { RegisterController } from "./controllers/Auth/register-controller";
import { UserController } from "./controllers/Auth/user-controller";
import { ProductController } from "./controllers/Product/product-controller";

const router: express.IRouter = express.Router()

//HOME
router.get('', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('HOME')
})

//LOGIN
router.post('/login/', new LoginController().login)
router.post('/login/tokenAuth', new MiddlewareToken().handle, new LoginController().loginByToken)


//REGISTER
router.post('/register/', new RegisterController().register)
router.post('/registerveiu/', new RegisterController().existEmail)

//USER
router.post('/user/updateCurrency', new MiddlewareToken().handle, new UserController().updateCurrency)

//PRODUCT
router.get('/product/:id', new ProductController().getProduct)
router.get('/products/:search?', new ProductController().getAllProduct)
router.post('/product/delete', new MiddlewareToken().handle, new ProductController().deleteProduct)
router.post('/product/edit', new MiddlewareToken().handle, new ProductController().editProduct)
router.post('/product/publish', new MiddlewareToken().handle, new ProductController().publishProduct)
router.post('/product/buy', new MiddlewareToken().handle, new ProductController().buyProduct)
export { router }