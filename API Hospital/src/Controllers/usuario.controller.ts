import { genericoController } from "./generico.controller";
import { modeloUsuario } from "../Models";
import * as bcrypt from "bcrypt"
import { crearToken } from "../services/token.service";

class usuarioController extends genericoController{
    constructor(){
        super(modeloUsuario)
    }

    async insertar(req, res) {
        const datos = req.body
        console.log("insertar")
        console.log(datos)
        const cifradoHash =  await bcrypt.genSalt()
        const hash = await bcrypt.hash(datos.password.trim(), cifradoHash)

        datos.password = hash

        const user = new modeloUsuario(datos)
        const resultado = await user.save()

        res.send({message: 'Updated successfully'})
    }

    async login(req, res){
        const datos = req.body
    
        const usuario : any = await modeloUsuario.findOne({correo: datos.correo.toLowerCase()})

        if(usuario){
            const existe =  await bcrypt.compare(datos.password, usuario.password)

            if(existe){
                const token = crearToken(usuario._id, usuario.roles)

                res.json({ token })
            }else{
                res.send("Password incorrecto")
            }
        }else{
            res.send("Usuario no existe")
        }
    }


}

export default usuarioController