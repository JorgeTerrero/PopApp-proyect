const cargaModel = require('../models/carga');

const controller = {};

controller.getAllCargas = async (req , res) => {
    try {

      let cargaDB = await cargaModel.find();

      res.json( { 
          ok: true,
         cargaDetails:cargaDB
        });
        
    } catch (err) {
        res.status(400).json({
            ok: false ,
            err
        });
    }
};

controller.postCarga = async (req , res) =>{

   try {

    let body = req.body;

    let carga = new cargaModel({
        descripcion: body.descripcion,
        tipoDeCarga:body.tipoDeCarga,
        peso: body.peso,
        origen: body.origen,
        status:body.status,
        contenedor: body.contenedor
    });

    let cargaDB = await carga.save();

    res.json({
        ok: true ,
        message: 'was saved',
        cargaDetails: cargaDB
    });
       
   } catch (err) {
       res.status(400).json({
           ok: false , err
       })
   }

};

controller.putCarga = async (req , res) =>{
        
        try {
            let _id = req.params.id;
            let body = req.body;

        let carga = {
            descripcion: body.descripcion,
            tipoDeCarga:body.tipoDeCarga,
            peso: body.peso,
            origen: body.origen,
            status:body.status,
            contenedor: body.contenedor
        };

        let cargaDB = await  cargaModel.findByIdAndUpdate(_id , carga , {new: true});

        res.json({
            ok: true , 
            message: 'was updated',
            cargaDetails: cargaDB
        });
        } catch (err) {
            res.status(400).json({
                ok: false , err
            })        
        }

    };

controller.deleteCarga = async (req , res) =>{
    
    try {

    let _id = req.params.id;
    let body = req.body;

      body.status = false;

    let cargaDB = await  cargaModel.findByIdAndUpdate(_id , body , {new: true});

    res.json({
           ok: true , 
           message: 'was deleted',
           cargaDetails: cargaDB
    });
    } catch (err) {
         res.status(400).json({
             ok: false , err
         })        
    }

};

controller.cargaFindById = async (req , res) =>{

    try {
         let codigo = req.params.codigo;
         let carga = await  cargaModel.find({ codigo: codigo});
         res.json(carga);
         
    } catch (err) {
         res.status(400).json({
              ok: false ,
              err
         });
    }

};

controller.cargaFindByContenedor = async (req , res) =>{

    try {
         let contenedorID = req.params.contenedor;
         let carga = await  cargaModel.find({ buque: contenedorID});
         res.json(carga);
         
    } catch (err) {
         res.status(400).json({
              ok: false ,
              err
         });
    }

};


module.exports = controller;