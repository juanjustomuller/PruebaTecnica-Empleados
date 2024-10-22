const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpleadoSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    antiguedad: {
        type: Number,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Empleados', EmpleadoSchema);