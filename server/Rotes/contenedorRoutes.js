const express = require('express');
const router = express.Router();
const contenedorController = require('../controllers/contenedorController');

    router.get('/api/contenedor' , contenedorController.getContenedor);
    router.post('/api/contenedor' , contenedorController.postContenedor);
    router.put('/api/contenedor/:id' , contenedorController.putContenedor);
    router.delete('/api/contenedor/:id' , contenedorController.deleteContenedor);
    router.get('/api/contenedor/:buque' , contenedorController.contenedorfindByBuque);
    router.get('/api/contenedor/:company' , contenedorController.contenedorfindCompany);

module.exports = router;