const mongoose = require('mongoose');
const  Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require:true},
    password: {type: String, require: true},
    date: {type: Date, default: Date.now},
    pass: {type:String, required:true}
});

UserSchema.methods.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password,salt);
    return hash;
};

UserSchema.methods.matchPassword = async function (password)
{
    return await bcrypt.compare(password, this.password);
};


module.exports = mongoose.model('User', UserSchema);
