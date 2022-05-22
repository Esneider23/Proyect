const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const BusSchema = new Schema({
    planca: {type: String, required: true},
    modelo: {type: String, required:true}
});

module.exports = mongoose.model('User', BusSchema);
