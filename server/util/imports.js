const express = require('express');
const app = express();

//routes import
app.use( require('../Rotes/buqueRotes'));
app.use( require('../Rotes/cargaRoutes'));
app.use( require('../Rotes/contenedorRoutes'));
app.use( require('../Rotes/horarioDeBuqueRoutes'));
app.use( require('../Rotes/horarioDecargaRoutes'));
app.use( require('../Rotes/productoRoutes'));
app.use( require('../Rotes/rutaRoutes'));
app.use( require('../Rotes/usuarioRoutes'));

module.exports = app;