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
    fecha: {
        type: Date,
        required: true
    },
    costo:{
        type: Number,
        required: true
    }
})

const modelo = mongoose.model("Factura", esquema)

export default modelo