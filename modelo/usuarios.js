'use strinct'

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var EsquemaUsuario = Schema({
    nombre: String,
    apellido: String,
    email: String,
    pasword: String,
    rol: String,
    imagen: String
});

module.exports = mongoose.model('Usarios', EsquemaUsuarios);