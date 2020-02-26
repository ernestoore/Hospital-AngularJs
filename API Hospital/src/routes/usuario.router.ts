import * as express from 'express'
import { usuarioController } from '../Controllers'
import { authenticationPolicy} from '../Policies/authentication.policy'

const route = express.Router()
const controller = new usuarioController

route.get("/", authenticationPolicy, controller.listar)
route.get("/_id", controller.detalle)
route.post("/", controller.insertar)
route.post("/login", controller.login)
route.put("/_id", controller.actualizar)
route.delete("/", controller.eliminar)

export default route 