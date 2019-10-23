const rutaModel = require('../models/horarioDeBuque');
const controller = {};

controller.getAllRutas = async (req , res)=>{
    
    try {
     const rutasDB =  await  rutaModel.find();
     res.json( {
          ok: true,
          rutaDetails: rutasDB
     });
    } catch (err) {
         res.status(400).json({
              ok: false , err
         });
    }
};

controller.postRuta = async (req , res) =>{

     try {
          let body = req.body;

     let ruta = new rutaModel({
          logitud: body.logitud,
          latitud: body.latitud,
          destino: body.destino, 
          procedencia: body.procedencia,
          buque: body.buque
     });

     let rutaDB = await ruta.save();
     
     res.json({
          ok: true ,
          message: 'the buque was saved',
          rutaDetails: rutaDB
     });
     res.json(buqueDB);
     } catch (err) {
          res.status(400).json({
               ok: false , 
               err
          });
     }
};

controller.putRuta = async (req , res) =>{
         try {
          let _id = req.params.id;
          let body = req.body;

          let ruta = {
               logitud: body.logitud,
               latitud: body.latitud,
               destino: body.destino, 
               procedencia: body.procedencia,
               buque: body.buque
          };

      let rutaDB = await horarioDeBuqueModel.findByIdAndUpdate(_id , ruta , {new : true});

      res.json({
           ok: true ,
           message: 'was updated',
           rutaDetails: rutaDB
      });
          
         } catch (err) {
              res.status(400).json({
                   ok: false , err
              })
         }

};

controller.deleteRuta = async (req , res) =>{
    try {
     let _id = req.params.id;
     let body = req.body;

     body.status = false;

     let rutaDB = await horarioDeBuqueModel.findByIdAndUpdate(_id , body , {new: true});

     res.json({
          ok: true , 
          message: 'was deleted',
          rutaDetails: rutaDB
     });

    } catch (err) {
         res.status(400).json({
              ok: false , err
         });
    }
};



module.exports = controller;