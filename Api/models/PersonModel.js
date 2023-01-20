'use strict';

const mongoose = require('mongoose');
const schemaPersona = new mongoose.Schema({

    Identificacion: { type: String, required: true, unique: true },
    Nombre: { type: String, required: true, unique: false },
    Email: { type: String, required: true, unique: true },
    Telefono: { type: Number, required: true, unique: false },
    Password: { type: String, required: true, unique: false },
    Rol: { type: String, required: true, unique: false },
    Estado: { type: Number, required: true, unique: false },
});

module.exports = mongoose.model('Persona', schemaPersona, 'Personas');