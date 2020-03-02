import mongoose = require('mongoose')


const esquema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        required: true
    },
    experiencia: {
        type: Number,
        required: true
    }
})

const modelo = mongoose.model("Medico", esquema)

export default modelo