const express = require('express');
const router = express.Router();
const horarioDeBuqueController = require('../controllers/horarioDeBuqueController');

    router.get('/api/horarioBuque' , horarioDeBuqueController.getAllHorarioDeBuque);
    router.post('/api/horarioBuque' , horarioDeBuqueController.postHorarioDeBuque);
    router.put('/api/horarioBuque/:id' , horarioDeBuqueController.putHorarioDeBuque);
    router.delete('/api/horarioBuque/:id' , horarioDeBuqueController.deleteHorarioDeBuque);


module.exports = router;