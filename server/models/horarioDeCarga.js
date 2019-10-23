const mongoose = require('mongoose');
const {Schema} = mongoose;


const horarioDeCargaSchema = new Schema({
    fechaDeEntrada: {type: String , required: true},
    fechaDeSalida: {type: String , required: true},
    status: {type: Boolean , default: true},
    carga: {type: Schema.Types.ObjectId , required: true}
});

module.exports = mongoose.model('horarioDeCarga' , horarioDeCargaSchema);