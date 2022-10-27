import express, { NextFunction, Request, Response } from "express";
import { LoginController } from "./controllers/Auth/login-controller";
import { MiddlewareToken } from "./controllers/Auth/middleware-token";
import { RegisterController } from "./controllers/Auth/register-controller";
import { UserController } from "./controllers/Auth/user-controller";
import { CategoriesController } from "./controllers/Categories/categories-controller";
import { ExtractController } from "./controllers/Extract/extract-controller";
import { ProductController } from "./controllers/Product/product-controller";
import { ShoppingKartController } from "./controllers/ShoppingKart/shopping-kart-controller";

const router: express.IRouter = express.Router()

//HOME
router.get('', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('HOME')
})

//CONTROLLERS
const loginController = new LoginController()
const registerController = new RegisterController()
const userController = new UserController()
const productController = new ProductController()
const categoriesController = new CategoriesController()
const shoppingKartController = new ShoppingKartController()
const extractController = new ExtractController()
const middlewareToken = new MiddlewareToken()

//LOGIN
router.post('/login/', loginController.login)
router.post('/login/tokenAuth', middlewareToken.handle, loginController.loginByToken)


//REGISTER
router.post('/register/', registerController.register)
router.post('/registerveiu/', registerController.existEmail)

//USER
router.post('/user/updateCurrency', middlewareToken.handle, userController.updateCurrency)

//PRODUCT
router.get('/product/:id', productController.getProduct)
router.post('/products/:search?', productController.getAllProduct)
router.post('/products/cat/:search?', productController.getAllProductbyCat)
router.post('/product/delete', middlewareToken.handle, productController.deleteProduct)
router.post('/product/edit', middlewareToken.handle, productController.editProduct)
router.post('/product/publish', middlewareToken.handle, productController.publishProduct)
router.post('/product/buy', middlewareToken.handle, productController.buyProduct)

//CATEGORIES
router.get('/categories/', categoriesController.listCategories)

//SHOPPINGKART
router.post('/shoppingKart/products', middlewareToken.handle, shoppingKartController.getShoppingkart)
router.post('/shoppingKart/addProduct', middlewareToken.handle, shoppingKartController.addToShoppingkart)
router.post('/shoppingKart/removeProduct', middlewareToken.handle, shoppingKartController.removeFromShoppingkart)

//EXTRACT
router.post('/extracts/', middlewareToken.handle, extractController.getExtracts)
router.post('/extracts/saveExtract', middlewareToken.handle, extractController.saveExtract)
router.post('/extracts/extractInfo', middlewareToken.handle, extractController.getExtractsInfos)

export { router }