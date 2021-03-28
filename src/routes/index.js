const route = require('express').Router();

const userRoutes = require('./user');

// Middleware para el enrutado de user
route.use('/user', userRoutes);

module.exports = route;