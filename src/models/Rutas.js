const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const RutaSchema = new Schema({
    nombre: {type: String, required:true},
    salida: {type: String, required: true},
    llegada: {type: String, required:true},
    precio: {type: Int16Array, required:true}
})

module.exports = mongoose.model('Ruta', RutaSchema);