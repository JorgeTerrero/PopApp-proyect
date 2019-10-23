const mongoose = require('mongoose');
const {Schema} = mongoose;

const rutaSchema = new Schema({
    longitud: { type: Number , required: true},
    latitud: {type: Number , required: true},
    destino: {type: String , required: true}, 
    procedencia: { type: String , required: true},
    status: {type: Boolean , default: true , required: false},
    buque: {type: Schema.Types.ObjectId , required: true}
});

module.exports = mongoose.model('Ruta' , rutaSchema);