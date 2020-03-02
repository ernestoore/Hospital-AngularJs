import * as express from 'express'
import { medicoController } from '../Controllers/'


const route = express.Router()
const controller = new medicoController

route.get("/", controller.listar)
route.get("/:_id", controller.detalle)
route.post("/", controller.insertar)
route.put("/:_id", controller.actualizar)
route.delete("/", controller.eliminar)

export default route