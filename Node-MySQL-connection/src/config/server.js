const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../static')))

module.exports = app;