const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./connectDB');
const empleadosRoutes = require('./routes/empleadosRoutes.js');

const PORT = process.env.PORT || 5000;

//Inicializamos la aplicacion con express
const app = express()

//Middleware
app.use(cors());
app.use(express.json()) //para parsear el JSON en las solicitudes

//Conectar a mongoDb
connectDB();

//Rutas
app.use('/api/empleados', empleadosRoutes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})