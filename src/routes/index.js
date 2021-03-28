const route = require('express').Router();

const userRoutes = require('./users');

// Middleware para el enrutado de user
route.use('/users', userRoutes);

module.exports = route;