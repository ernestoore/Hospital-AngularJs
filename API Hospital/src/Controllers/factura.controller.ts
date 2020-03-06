import { genericoController } from "./generico.controller";
import { modeloFactura } from "../Models";


class facturaController extends genericoController{
    constructor(){
        super(modeloFactura)
    }
}

export default facturaController