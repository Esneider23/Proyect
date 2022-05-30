const mongoose = require('mongoose');
const moment = require('moment');
const { isDate } = require('moment');
const  Schema = mongoose.Schema;

const RutasSchema = new Schema({
    id: {type: Number, auto:true},
    nombre: {type:String, required: true},
    origen: {type: String, require: true},
    destino: {type: String, require:true},
    fecha_salida: {type: Date},
    fecha_llegada: {type: Date, require:true},
    precio: {type: Number, require: true},
    cupos: {type: Number, require: true}
});


module.exports = mongoose.model('Ruta', RutasSchema);