const contenedorModel = require('../models/contenedor');
const controller = {};

controller.getContenedor = async (req , res) =>{

    try {
          let contenedorDB = await contenedorModel.find();
          res.json({
              ok: true,
              contenedorDetails:contenedorDB
            });
    } catch (err) {
        res.status(400).json({
            ok: false , err
        });
    }

};

controller.postContenedor = async (req , res) =>{
    
    try {
        let body = req.body;

    let contenedor = new contenedorModel({
        longitudInterna: body.longitudInterna,
        anchoInterno: body.anchoInterno,
        altoImterno: body.altoImterno,
        altoPuerta: body.altoPuerta,
        tara: body.tara,
        maxCarga: body.maxCarga,
        codigo: body.codigo,
        procedencia: body.procedencia,
        company: body.company,
        contenedor: body.contenedor
    });

    let contenedorDB = await contenedor.save();

    res.json({
        ok: true , 
        message: 'was saved',
        contenedorDetails: contenedorDB
    });

    } catch (err) {
        res.status(400).json({
            ok: false , err
        });
    }

    

};

controller.putContenedor = async (req , res) =>{

    try {
        let _id = req.params.id;
        let body = req.body;

    let contenedor = {
        longitudInterna: body.longitudInterna,
        anchoInterno: body.anchoInterno,
        altoImterno: body.altoImterno,
        altoPuerta: body.altoPuerta,
        tara: body.tara,
        maxCarga: body.maxCarga,
        codigo: body.codigo,
        procedencia: body.procedencia,
        company: body.company,
        buque: body.buque
    };

    let contenedorDB = await contenedorModel.findByIdAndUpdate(_id , contenedor , {new: true});

    res.json({
        ok: true , 
        message: 'was updated',
        contenedorDetails: contenedorDB
    });

    } catch (err) {
        res.status(400).json({
            ok: false , err
        });
    }

    
};

controller.deleteContenedor = async (req , res) =>{
         
    try {
        let _id = req.params.id;
        let body = req.body;

      body.status  = false;

    let contenedorDB = await contenedorModel.findByIdAndUpdate(_id , body , {new: true});

    res.json({
        ok: true , 
        message: 'was deleted',
        contenedorDetails: contenedorDB
    });

    } catch (err) {
        res.status(400).json({
            ok: false , err
        });
    }


};

controller.contenedorfindByBuque = async (req , res) =>{

    try {
                let buqueID  = req.params.buque ;
                let contenedor = await contenedorModel.find({buque: buqueID});
                res.json(contenedor);
    } catch (err) {
        res.status(400).json({
            ok: false , 
            err
        })
        
    }

};

controller.contenedorfindCompany = async (req , res) =>{

    try {
                let companyID  = req.params.company ;
                let contenedor = await contenedorModel.find({company: companyID})
                res.json(contenedor);
    } catch (err) {
        res.status(400).json({
            ok: false , 
            err
        })
        
    }

};

module.exports = controller;