const horarioDeCargaModel = require('../models/horarioDeCarga');
const controller = {};

controller.getAllHorarioDeCarga = async (req , res)=>{
    
    try {
     const horarioDeCargaDB =  await  horarioDeCargaModel.find();
     res.json( {
          ok: true,
          horarioDeCargaDetails: horarioDeCargaDB
     });
    } catch (err) {
         res.status(400).json({
              ok: false , err
         });
    }
};

controller.posthorarioDeCarga = async (req , res) =>{

     try {
          let body = req.body;

     let horarioDeCarga = new horarioDeCargaModel({
          fechaDeEntrada: body.fechaDeEntrada,
          fechaDeSalida: body.fechaDeSalida,
          carga: body.carga
     });

     let horarioDeCargaDB = await horarioDeCarga.save();
     
     res.json({
          ok: true ,
          message: 'the buque was saved',
          horarioDeCargaDetails: horarioDeCargaDB
     });
     res.json(buqueDB);
     } catch (err) {
          res.status(400).json({
               ok: false , 
               err
          });
     }
};

controller.putHorarioDeCarga = async (req , res) =>{
         try {
          let _id = req.params.id;
          let body = req.body;

          let horarioDeCarga = {
               fechaDeEntrada: body.fechaDeEntrada,
               fechaDeSalida: body.fechaDeSalida,
               carga: body.carga
          };

      let horarioDeCargaDB = await horarioDeCargaModel.findByIdAndUpdate(_id , horarioDeCarga , {new : true});

      res.json({
           ok: true ,
           message: 'was updated',
           horarioDeCargaDetails: horarioDeCargaDB
      });
          
         } catch (err) {
              res.status(400).json({
                   ok: false , err
              })
         }

};

controller.deleteHorarioDeCargaDetails = async (req , res) =>{
    try {

     let _id = req.params.id;
     let body = req.body;

     body.status = false;

     let horarioDeCargaDB = await horarioDeCargaModel.findByIdAndUpdate(_id , body , {new: true});

     res.json({
          ok: true , 
          message: 'was deleted',
          horarioDeCargaDetails: horarioDeCargaDB
     });

    } catch (err) {
         res.status(400).json({
              ok: false , err
         });
    }
};



module.exports = controller;