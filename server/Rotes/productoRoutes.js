const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

    router.get('/api/producto' , productoController.getAllProducto);
    router.post('/api/producto' , productoController.postProducto);
    router.put('/api/producto/:id' , productoController.putProducto);
    router.delete('/api/producto/:id' , productoController.deleteProducto);


module.exports = router;