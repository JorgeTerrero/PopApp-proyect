const express = require('express');
const router = express.Router();
const horarioDeCargaController = require('../controllers/horarioDeCargaController');

    router.get('/api/horarioCarga' , horarioDeCargaController.getAllHorarioDeCarga);
    router.post('/api/horarioCarga' , horarioDeCargaController.posthorarioDeCarga);
    router.put('/api/horarioCarga/:id' , horarioDeCargaController.putHorarioDeCarga);
    router.delete('/api/horarioCarga/:id' , horarioDeCargaController.deleteHorarioDeCargaDetails);


module.exports = router;