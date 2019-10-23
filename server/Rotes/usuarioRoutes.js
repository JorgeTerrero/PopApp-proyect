const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

    router.get('/api/usuario' , usuarioController.getAllUsuario);
    router.post('/api/usuario' , usuarioController.postUsuario);
    router.put('/api/usuario/:id' , usuarioController.putUsuario);
    router.delete('/api/usuario/:id' , usuarioController.deleteUsuario);


module.exports = router;