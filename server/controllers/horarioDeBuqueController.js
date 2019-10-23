const horarioDeBuqueModel = require('../models/horarioDeBuque');
const controller = {};

controller.getAllHorarioDeBuque = async (req , res)=>{
    
    try {
     const horarioDeBuqueDB =  await  horarioDeBuqueModel.find();
     res.json( { ok: true,
          horarioDeBuqueDetails: horarioDeBuqueDB
     });
    } catch (err) {
         res.status(400).json({
              ok: false , err
         });
    }
};

controller.postHorarioDeBuque = async (req , res) =>{

     try {
          let body = req.body;

     let horarioDeBuque = new horarioDeBuqueModel({
          fechaEntrada: body.fechaEntrada,
          fechaDeSalida:body.fechaDeSalida,
          buque: body.buque 
     });

     let horarioDeBuqueDB = await horarioDeBuque.save();
     
     res.json({
          ok: true ,
          message: 'was saved',
          HorarioDeBuqueDetails: horarioDeBuqueDB
     });
     res.json(buqueDB);
     } catch (err) {
          res.status(400).json({
               ok: false , 
               err
          });
     }
};

controller.putHorarioDeBuque = async (req , res) =>{
         try {
          let _id = req.params.id;
          let body = req.body;

          let horarioDeBuque = {
               fechaEntrada: body.fechaEntrada,
               fechaDeSalida:body.fechaDeSalida,
               buque: body.buque 
          };
     

      let horarioDeBuqueDB = await horarioDeBuqueModel.findByIdAndUpdate(_id , horarioDeBuque , {new : true});

      res.json({
           ok: true ,
           message: 'was updated',
           horarioDeBuqueDetails: horarioDeBuqueDB
      });
          
         } catch (err) {
              res.status(400).json({
                   ok: false , err
              })
         }

};

controller.deleteHorarioDeBuque = async (req , res) =>{
    try {
     let _id = req.params.id;
     let body = req.body;

     body.status = false;

     let horarioDeBuqueDB = await horarioDeBuqueModel.findByIdAndUpdate(_id , body , {new: true});

     res.json({
          ok: true , 
          message: 'was deleted',
          horarioDeBuqueDetails: horarioDeBuqueDB
     });

    } catch (err) {
         res.status(400).json({
              ok: false , err
         });
    }
};



module.exports = controller;