const mongoose = require('mongoose');
const moment = require('moment');
const  Schema = mongoose.Schema;

const RutasSchema = new Schema
({
    id: {type: Number, auto:true},
    nombre: {type:String, required: true},
    origen: {type: String, require: true},
    destino: {type: String, require:true},
    fecha_salida: {type: String, require:true},
    fecha_llegada: {type: String, require:true},
    precio: {type: Number, require: true},
    hsalida: {type: String, require: true},
    hllegada: {type:String, require: true}
});



module.exports = mongoose.model('Ruta', RutasSchema);
