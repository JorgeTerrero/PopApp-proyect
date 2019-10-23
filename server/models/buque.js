const mongoose = require('mongoose');

const {Schema} = mongoose;

const buqueSchema = new Schema({
    nombre: { type: String , required: true},
    codigo: {type: String , required: true},
    imo: {type: String , required: true},
    bandera: {type: String , required: true},
    slora: {type: String , required: false},
    image: {type: String , required: false},
    procedencia: {type: String , required: false},
    status: {type: Boolean , default: true}
});

module.exports = mongoose.model('Buques' , buqueSchema );