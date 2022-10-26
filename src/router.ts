import express, { NextFunction, Request, Response } from "express";
import { LoginController } from "./controllers/Auth/login-controller";
import { MiddlewareToken } from "./controllers/Auth/middleware-token";
import { RegisterController } from "./controllers/Auth/register-controller";
import { UserController } from "./controllers/Auth/user-controller";
import { CategoriesController } from "./controllers/Categories/categories-controller";
import { ProductController } from "./controllers/Product/product-controller";
import { ShoppingKartController } from "./controllers/ShoppingKart/shopping-kart-controller";

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
router.post('/products/:search?', new ProductController().getAllProduct)
router.post('/products/cat/:search?', new ProductController().getAllProductbyCat)
router.post('/product/delete', new MiddlewareToken().handle, new ProductController().deleteProduct)
router.post('/product/edit', new MiddlewareToken().handle, new ProductController().editProduct)
router.post('/product/publish', new MiddlewareToken().handle, new ProductController().publishProduct)
router.post('/product/buy', new MiddlewareToken().handle, new ProductController().buyProduct)

//CATEGORIES
router.get('/categories/', new CategoriesController().listCategories)

//SHOPPINGKART
router.post('/shoppingKart/products', new MiddlewareToken().handle, new ShoppingKartController().getShoppingkart)
router.post('/shoppingKart/addProduct', new MiddlewareToken().handle, new ShoppingKartController().addToShoppingkart)
router.post('/shoppingKart/removeProduct', new MiddlewareToken().handle, new ShoppingKartController().removeFromShoppingkart)

export { router }