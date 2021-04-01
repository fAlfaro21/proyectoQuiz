const route = require('express').Router();
const model = require('../models/Questions');
const jwt = require('jsonwebtoken'); //HMAC SHA256

// Endpoints relativos a Questions

route.post('/createquestions', async (req, res) => {
  try {
    console.log(req.body);
    if (req.body != ""){
      const newQuestion = new model({
          title: req.body.title, 

          choices: [
            {
              label: req.body.label,
              id: req.body.id,
              name: req.body.name,
              value: req.body.value
            },
            {
              label: req.body.label,
              id: req.body.id,
              name: req.body.name,
              value: req.body.value
            },
            {
              label: req.body.label,
              id: req.body.id,
              name: req.body.name,
              value: req.body.value
            },
            {
              label: req.body.label,
              id: req.body.id,
              name: req.body.name,
              value: req.body.value
            },
          ],
          answer: req.body.answer
        });
      const questionData = newQuestion.save();  
      res.status(200).json({
        Data: questionData,
        Ok: true,
      });
  };
  } catch (err) {
    console.log(err);
    res.status(400).json({
      Message: "Error de lectura",
      Ok: false,
    });
  }
  });
  
  module.exports = route;