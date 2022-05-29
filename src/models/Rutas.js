const mongoose = require('mongoose');
const moment = require('moment')
const  Schema = mongoose.Schema;

const RutasSchema = new Schema({
    nombre: {type:String, required: true},
    origen: {type: String, require: true},
    destino: {type: String, require:true},
    fecha_salida: {type: Date, require: true},
    fecha_llegada: {type: Date, required:true},
    precio: {type: Number, required: true},
    cupos: {type: Number, required: true}
});


module.exports = mongoose.model('Ruta', RutasSchema);