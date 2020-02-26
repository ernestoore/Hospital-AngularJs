import { initializeServer } from "./services"
import *  as yenv from "yenv"
import initializeDatabase from "./services/database.service"


const env = yenv()
const begin = async () => {
    try {
       await initializeServer()
       console.log(`Server is running on port ${env.PORT}`)
    } catch (error) {
        console.log(error)
    }

    try {
      await  initializeDatabase()
        console.log("Connected to Dabase")
    } catch (error) {
        console.log(error)
    }
}

begin()