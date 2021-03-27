// Aquí configuración de conexión a la base de datos
//
const express = require("express");
const mongoose = require('mongoose');
//const dotenv = require ('dotenv').config();

const DB_URI = 'mongodb://localhost:27017/questions';

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.info('Connected to DB!');
  })
  .catch((err) => console.error(err));

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.info('> mongoose succesfully disconnected!');
    process.exit(0);
  });
});

module.exports = mongoose;