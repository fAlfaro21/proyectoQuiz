const route = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken'); //HMAC SHA256

// Endpoints relativos a Questions

route.get('/getquestions/:localSotrageId', async (req, res) => {
    const localSotrageId = req.params.localSotrageId;
  try {
    if (localSotrageId != ""){
      const tokenDecoded = jwt.decode(localSotrageId); 
      const userData = await User.findOne({email: tokenDecoded.user});
      const tokenVerified = JSON.stringify (jwt.verify(localSotrageId, userData.secret));  
        res.status(200).json({
          Data: userData,
          Ok: true,
          Token: localSotrageId,
        });
  };
  } catch (err) {
    console.log(err);
    res.status(400).json({
      Message: "Token desconocido o inválido",
      Ok: false,
    });
  }
  });
  
  module.exports = route;