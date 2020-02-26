import * as yenv from "yenv"
import *  as jwt from 'jwt-simple'
import * as moment from "moment"

const env = yenv()

const crearToken = (_id: String, roles: string[]) =>{
    const payLoad = {
        iat: moment().unix(),
        exp: moment().add(5, 'minutes').unix(),
        _id,
        roles
    }

    return jwt.encode(payLoad, env.KEYWORD_SECRET)
}

const validarToken = (token: string):Promise<any> => {
    return new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, env.KEYWORD_SECRET)
            resolve(payload)
        } catch (error) {
            reject(error)
        }
    })
}

export {crearToken, validarToken}