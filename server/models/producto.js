const mongoose = require('mongoose');
const {Schema} = mongoose;

const productoSchema = new Schema({
        nombre: {type: String , required: true},
        codigo: {type: String , required: true},
        lote: { type:String , required: false},
        pesoBruto: {type: Number , required: true},
        pesoNeto: {type: Number, required: true},
        costo: {type: Number , required: true},
        tipoProducto: {type: String , required: true},
        status: {type: Boolean , default: true},
        carga:{ type: Schema.Types.ObjectId , required: true}
});

module.exports = mongoose.model('Producto' , productoSchema);