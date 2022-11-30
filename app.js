'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//configurar cabeceras http
// rutas base
module.exports = app;

app.get('/pruebas', function(req, res) {
    res.status(200).send({ mesage: 'el usuario no se ha identidicado' });
});