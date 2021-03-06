import * as http from "http"
import * as express from "express"
import { routeUsuario, routeMedico, routeAtencion, routeFactura } from "../routes"
import * as bodyParser from "body-parser"
import * as yenv from "yenv"

let httpServer
const app = express()
const env = yenv()

const initializeServer = (): Promise<any> => {
    return new Promise((resolve, reject) => {
        httpServer = http.createServer(app)
        var cors = require('cors')
        app.use(cors())

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended: true}))

        app.use("/usuarios", routeUsuario)
        app.use("/medicos", routeMedico)
        app.use("/atenciones", routeAtencion)
        app.use("/facturas", routeFactura)
        httpServer.listen(env.PORT)
        httpServer.on("listening", () => resolve())
        httpServer.on("error", (error) => reject(error))
    })
}

export default initializeServer