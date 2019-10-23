const express = require('express');
const router = express.Router();
const rutaController = require('../controllers/rutaController');

    router.get('/api/ruta' , rutaController.getAllRutas);
    router.post('/api/ruta' , rutaController.postRuta);
    router.put('/api/ruta/:id' , rutaController.putRuta);
    router.delete('/api/ruta/:id' , rutaController.deleteRuta);


module.exports = router;