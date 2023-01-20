'use strict';

const express = require('express');
const router = express.Router();
const Persona = require('../models/PersonModel');


router.post('/RegisterUssers', (req, res) => {
    let body = req.body;
    let nuevaPersona = new Persona({
        Identificacion: body.Cedula,
        Nombre: body.Nombre,
        Email: body.Email,
        Telefono: body.Telefono,
        Password: body.Password,
        Rol: body.Rol,
        Estado: 1,
    });
    nuevaPersona.save((err, personaDB) => {
        if (err) {
            res.json({
                resultado: false,
                msj: 'No se pudo registrar la persona, ocurrio el siguiente error: ',
                err
            });
        } else {
            res.json({
                resultado: true,
                msj: 'Registro realizado de manera correcta',
                personaDB
            });
        }
    });
});

module.exports = router;