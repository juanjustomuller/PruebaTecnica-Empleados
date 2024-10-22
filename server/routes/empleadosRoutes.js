const express = require('express');
const router = express.Router();
const Empleados = require('../models/Empleados');

//Ruta Get para obtener todos los empleados
router.get('/', async (req, res) => {
    try {
        const empleados = await Empleados.find()
        console.log(empleados)
        res.json(empleados)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//Ruta para buscar un empleado por Id
router.get('/:id', async (req, res) => {
    try {
        const empleado = await Empleados.findById(req.params.id);

        if(!empleado) return res.status(404).json({message: "Empleado no encontrado"}) 
        return res.json(empleado)
    
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

//Ruta Post para crear nuevos empleados
router.post('/create', async (req, res) => {
    const {fullName, edad, area, antiguedad, telefono} = req.body

    //validamos que esten todos los campos completos
    if(!fullName || !edad || !area || !antiguedad || !telefono) {
        return res.status(404).json({message: "Por favor completa todos los campos"})
    }

    try {
        const nuevoEmpleado = new Empleados({
            fullName,
            edad,
            area, 
            antiguedad,
            telefono
        });

        //guardo el nuevo empleado
        await nuevoEmpleado.save()

        res.status(201).json(nuevoEmpleado)
    } catch (error) {
        return res.status(500).json({message: "Error al crear el nuevo empleado", error: error.message})
    }
});

module.exports = router;