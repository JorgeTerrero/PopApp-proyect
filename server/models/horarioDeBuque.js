const mongosee = require('mongoose');
const {Schema} = mongosee;

const horarioDeBuqueSchema = new Schema({
     fechaEntrada: {type: String , required: true},
     fechaDeSalida: {type: String , required: true},
     status: {type: Boolean , default: true},
     buque: {type: Schema.Types.ObjectId , required: true}   
});

module.exports = mongosee.model('horarioDeBuque' , horarioDeBuqueSchema);