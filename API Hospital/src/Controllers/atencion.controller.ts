import { genericoController } from "./generico.controller";
import { modeloAtencion } from "../Models";


class atencionController extends genericoController{
    constructor(){
        super(modeloAtencion)
    }
}

export default atencionController