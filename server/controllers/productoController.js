const productoModel = require('../models/producto');
const controller = {};

controller.getAllProducto = async (req , res)=>{
    
    try {
     const productoDB =  await  productoModel.find();
     res.json( {
          ok: true ,
          productoDetails: productoDB
     });
    } catch (err) {
         res.status(400).json({
              ok: false , err
         });
    }
};

controller.postProducto = async (req , res) =>{

     try {
          let body = req.body;

     let producto = new productoModel({
               nombre: body.nombre,
               codigo: body.codigo,
               lote: body.lote,
               pesoBruto: body.pesoBruto,
               pesoNeto: body.pesoNeto,
               costo: body.costo,
               tipoProducto: body.tipoProducto,
               carga: body.carga
     });

     let productoDB = await producto.save();
     
     res.json({
          ok: true ,
          message: 'the buque was saved',
          productoDetails: productoDB
     });
     res.json(productoDB);

     } catch (err) {
          res.status(400).json({
               ok: false , 
               err
          });
     }
};

controller.putProducto = async (req , res) =>{
         try {
          let id = req.params.id;
          let body = req.body;

          let producto = {
               nombre: body.nombre,
               codigo: body.codigo,
               lote: body.lote,
               pesoBruto: body.pesoBruto,
               pesoNeto: body.pesoNeto,
               costo: body.costo,
               tipoProducto: body.tipoProducto,
               carga: body.carga
     };

      let productoDB = await horarioDeBuqueModel.findByIdAndUpdate(id , producto , {new : true});

      res.json({
           ok: true ,
           message: 'was updated',
           productoDetails: productoDB
      });
          
         } catch (err) {
              res.status(400).json({
                   ok: false , err
              })
         }

};

controller.deleteProducto = async (req , res) =>{
    try {
     let _id = req.params.id;
     let body = req.body;

     body.status = false;

     let productoDB = await productoModel.findByIdAndUpdate(_id , body , {new: true});

     res.json({
          ok: true , 
          message: 'was deleted',
          productoDetails: productoDB
     });

    } catch (err) {
         res.status(400).json({
              ok: false , err
         });
    }
};



module.exports = controller;