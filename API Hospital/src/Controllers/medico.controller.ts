import { genericoController } from "./generico.controller";
import { modeloMedico } from "../Models";


class medicoController extends genericoController{
    constructor(){
        super(modeloMedico)
    }
}

export default medicoController