const mongoose = require('mongoose');
const moment = require('moment')
const  Schema = mongoose.Schema;

const RutasSchema = new Schema({
    origen: {type: String, require: true},
    destino: {type: String, require:true},
    fecha_salida: {type: Date, require: true, default: Date.now()},
    fecha_llegada: {type: Date, default: moment().add(5,'hours').unix()}
});


module.exports = mongoose.model('Rutas', RutasSchema);