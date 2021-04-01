const route = require('express').Router();

const userRoutes = require('./users');
const questionRoutes = require('./questions');

// Middleware para el enrutado de user
route.use('/users', userRoutes);

// Middleware para el enrutado de question
route.use('/questions', questionRoutes);

module.exports = route;