const express = require('express');
const router = express.Router();
const cargaController = require('../controllers/cargaController');

    router.get('/api/carga' , cargaController.getAllCargas);
    router.post('/api/carga' , cargaController.postCarga);
    router.put('/api/carga/:id' , cargaController.putCarga);
    router.delete('/api/carga/:id' , cargaController.deleteCarga);
    router.get('/api/carga/:codigo' , cargaController.cargaFindById);
    router.get('/api/carga/:controlador' , cargaController.cargaFindByContenedor);


module.exports = router;