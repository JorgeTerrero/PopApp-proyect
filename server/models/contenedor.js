const mongooose = require('mongoose');
const {Schema} = mongooose;

const contenedorSchema = new Schema({
                longitudInterna: {type: Number , required: true},
                anchoInterno: {type: Number , required: true},
                altoImterno: {type: Number , required: true},
                altoPuerta: {type: Number , required: true},
                tara:{type: String , required: false},
                maxCarga: {type: Number , required: true},
                codigo: { type: String , required: true},
                procedencia: {type: String , required: true},
                company: {type: String , required: true},
                status: {type:Boolean , default: true},
                buque: {type: Schema.Types.ObjectId , required: true}
}); 

module.exports = mongooose.model('Contenedores' , contenedorSchema);