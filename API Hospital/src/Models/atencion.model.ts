import mongoose = require('mongoose')


const esquema = new mongoose.Schema({
    paciente: {
        type: String,
        required: true
    },
    medico:{
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    seguro:{
        type: String,
        required: true
    },
    tipo: {
        type: String,
        required: true
    }

})

const modelo = mongoose.model("Atencion", esquema)

export default modelo