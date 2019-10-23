const buqueModel = require('../models/buque');

const controller = {};

controller.getAllBuque = async (req , res) => {
    
    try {
     const buqueDB =  await  buqueModel.find();
     res.header('Access-Control-Allow-Origin', '*');
     res.json( {
          ok: true,
          buqueDetails:buqueDB
     });
    } catch (err) {
         res.status(400).json({
              ok: false , err
         });
    }
};

controller.postBuque = async (req , res) =>{

     try {
          let body = req.body;

     let buque = new buqueModel({
          nombre: body.nombre,
          codigo: body.codigo,
          imo: body.imo,
          bandera: body.bandera,
          slora: body.slora,
          image: body.image,
          procedencia: body.procedencia,
          status: body.status
     });

     let buqueDB = await buque.save();
     
     res.json({
          ok: true ,
          message: 'the buque was saved',
          buque: buqueDB
     });
     res.json(buqueDB);
     } catch (err) {
          res.status(400).json({
               ok: false , 
               err
          });
     }
};

controller.putBuque = async (req , res) =>{
         try {
          let _id = req.params.id;
          let body = req.body;

          let buque = {
           nombre: body.nombre,
           codigo: body.codigo,
           imo: body.imo,
           bandera: body.bandera,
           slora: body.slora,
           image: body.image,
           procedencia: body.procedencia,
           status: body.status
      };

      let buqueDB = await buqueModel.findByIdAndUpdate(_id , buque , {new : true});

      res.json({
           ok: true ,
           message: 'was updated',
           buqueDetails: buqueDB
      });
          
         } catch (err) {
              res.status(400).json({
                   ok: false , 
                   err
              })
         }

};

controller.deleteBuque = async (req , res) =>{
    try {
     let _id = req.params.id;
     let body = req.body;

     body.status = false;

     let buqueDB = await buqueModel.findByIdAndUpdate(_id , body , {new: true});

     res.json({
          ok: true , 
          message: 'was deleted',
          buque: buqueDB
     });

    } catch (err) {
         res.status(400).json({
              ok: false , err
         });
    }
};

controller.BuqueFindById = async (req , res) =>{

     try {
          let codigo = req.params.codigo;
          let buque = await buqueModel.findOne({codigo: codigo});
          res.json(buque);
          
     } catch (err) {
          res.status(400).json({
               ok: false ,
               err
          });
     }

};

module.exports = controller;