import express from "express"
import { router } from './router'

export class App{
    
    public app: express.Application
    public port: number  = 3000
    public routes: express.IRouter

    constructor(){
        this.app = express()
        this.setPort()
        this.setMiddlewares()
        this.routes = express.Router()
        this.setRoutes()
    }

    setMiddlewares(){
        this.app.use(express.json())
    }

    setRoutes(){
        this.app.use('/', router)
    }

    setPort(){
        this.app.set('port', this.port)
    }
    startListen(){
        this.app.listen(this.port, () => console.log('iniciando Servidor!'))
    }

}