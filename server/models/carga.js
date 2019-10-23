const mongoose = require('mongoose');
const {Schema} = mongoose;

const cargaSchema = new Schema({
          codigo: {type: String , required: true},
          descripcion: {type: String , required: true},
          tipoDeCarga:{type: String , required: true},
          peso: {type: Number , required: true},
          origen: {type: String , required: true},
          status:{ type: Boolean , default: true},
          contenedor: {type: Schema.Types.ObjectId , required: true}
});

module.exports = mongoose.model('Carga' , cargaSchema);