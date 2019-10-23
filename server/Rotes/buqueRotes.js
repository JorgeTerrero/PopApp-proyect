const express = require('express');
const router = express.Router();
const buqueController = require('../controllers/buqueController');

    router.get('/api/buque' , buqueController.getAllBuque);
    router.post('/api/buque' , buqueController.postBuque);
    router.put('/api/buque/:id' , buqueController.putBuque);
    router.delete('/api/buque/:id' , buqueController.deleteBuque);
    router.get('/api/buque/:codigo' , buqueController.BuqueFindById);

module.exports = router;