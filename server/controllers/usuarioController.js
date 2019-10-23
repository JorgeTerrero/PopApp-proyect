const usuarioModel = require('../models/usuario');
const controller = {};

controller.getAllUsuario = async (req , res)=>{
    
    try {
     const usuarioDB =  await  usuarioModel.find();
     res.json( {
          ok: true,
          usuarioDetails:usuarioDB
     });
    } catch (err) {
         res.status(400).json({
              ok: false , err
         });
    }
};

controller.postUsuario = async (req , res) =>{

     try {
          let body = req.body;

     let usuario = new rutaModel({
          user: body.user,
          password: body.password,
          role: body.role,
          token: body.token
     });

     let usuarioDB = await usuario.save();
     
     res.json({
          ok: true ,
          message: 'the buque was saved',
          usuarioDetails: usuarioDB
     });
     res.json({
          ok: true,
          buqueDetails: buqueDB
     });
     } catch (err) {
          res.status(400).json({
               ok: false , 
               err
          });
     }
};

controller.putUsuario = async (req , res) =>{
         try {
          let _id = req.params.id;
          let body = req.body;

          let usuario = {
               user: body.user,
               password: body.password,
               role: body.role,
               token: body.token
          };

      let usuarioDB = await horarioDeBuqueModel.findByIdAndUpdate(_id , usuario , {new : true});

      res.json({
           ok: true ,
           message: 'was updated',
           usuarioDetails: usuarioDB
      });
          
         } catch (err) {
              res.status(400).json({
                   ok: false , err
              })
         }

};

controller.deleteUsuario = async (req , res) =>{
    try {
     let _id = req.params.id;
     let body = req.body;

     body.status = false;

     let usuarioDB = await horarioDeBuqueModel.findByIdAndUpdate(_id , body , {new: true});

     res.json({
          ok: true , 
          message: 'was deleted',
          usuarioDetails: usuarioDB
     });

    } catch (err) {
         res.status(400).json({
              ok: false , err
         });
    }
};



module.exports = controller;