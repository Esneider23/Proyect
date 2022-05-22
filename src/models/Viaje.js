const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const ViajeSchema = new Schema({
    hsalida: {type: Date},
    hllegada: {type: Date}    
});

module.exports = mongoose.model('User', ViajeSchema);
