import * as express from 'express'
import { facturaController } from '../Controllers'


const route = express.Router()
const controller = new facturaController

route.get("/", controller.listar)
route.get("/:_id", controller.detalle)
route.post("/", controller.insertar)
route.put("/:_id", controller.actualizar)
route.delete("/:_id", controller.eliminar)

export default route