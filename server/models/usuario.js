const mongoose = require('mongoose');
const {Schema} = mongoose;

const usuarioSchema = new Schema({
    user: {type: String , required: true},
    password: {type: String , required: true},
    role: {type: String , required: true},
    token: {type: String , required: true},
    status: {type: Boolean , default: true}
});

module.exports = mongoose.model('Usuario' , usuarioSchema);