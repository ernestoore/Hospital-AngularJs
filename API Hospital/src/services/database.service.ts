import  mongoose = require("mongoose")
import { connectionString } from "../config"

const initializeDatabase = async () => {
    mongoose.Promise = global.Promise

    const connectionPromise = new Promise((resolve, reject) => {
        mongoose.connect(connectionString, {
            keepAlive: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })

        mongoose.connection.on("connected", () => {
            console.log("connected to DB")
            require("../Models/usuario.model")
            require("../Models/medicos.model")
            resolve()
            
        })

        mongoose.connection.on("error", error => {
            console.log("Something happened on DB Connection")
            reject()
        })
        
    })

    await connectionPromise
}

export default initializeDatabase
