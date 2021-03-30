const express = require('express');
const session = require('express-session'); 

const mongoose = require('./configs/db');
const routeMiddleware = require('./routes');

const app = express();

// Aquí el middleware correspondiente para parsear el body de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', express.static('./src/public'));

// Aquí el middleware donde se cargará la ruta principal
app.use('/quiz', routeMiddleware);

const PORT = 4000;
app.listen(PORT, () => console.info(`> listening at http://localhost:${PORT}`));