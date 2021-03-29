const route = require('express').Router();
const md5 = require("md5");
const user = require('../models/User');
const cryptoRandomString = require('crypto-random-string');
const jwt = require('jsonwebtoken'); //HMAC SHA256
const { requireEmailAndPassword } = require('../middlewares/requiredFields');
//const { ok } = require('node:assert');

// Endpoints relativos a Users

route.post('/register', [requireEmailAndPassword], (req, res) => {
    const email = req.body.email;
    const pass = md5(req.body.pass);
    const payload = { "user": email }; 
    const secret = cryptoRandomString({length: 10, type: 'base64'}); 
    const token = jwt.sign(payload, secret);
    try{      
        const newUser = new model({email, pass, secret});
        const userData = newUser.save();
    
        return res.status(200).json({
            message: "Creación de usuario correcta",
            result: userData.email,
            data: token,
        });
        }
        catch(err) {
            console.log(err);
            return res.status(400).json({
            ok: false,
            data: err.message,
            });
        }
});

route.get('/login/:email', (req, res) => {
    const email = req.params.email;    
    const payload = { "user": email }; 
    const secret = cryptoRandomString({length: 10, type: 'base64'});
    try {
        const userData = User.findOne({email:email});      
        //Si existe la info del usuario, crea un token  
        //if (userData.length > 0){   
          //  const token = jwt.sign(payload, secret);  
        //};            
        if (userData != null) {
            res.status(200).json({
              message: "Lectura correcta",
              data: jwt.sign(payload, secret),
              ok: true,
            })  
        }
        else if (userData === null) {
            res.status(400).json({
            data: err.message,
            ok: false,
            })
        }
      }
        catch (err) {
          console.log(err);
          res.status(500).json({
            data: err.message,
            ok: false,
        });
      }
});

route.get('/logout', (req, res) => {
    const newSecret = cryptoRandomString({length: 10, type: 'base64'});
  try {
    if (req.headers.authorization.length > 0){
      const headerAuthorization = req.headers.authorization;
      const newToken = headerAuthorization.split(" ");
      const tokenDecoded = jwt.decode(newToken[1]); //  { user: 'usuario33', exp: 1616514528, iat: 1616510928 }

      const userData = User.findOneAndUpdate({email:tokenDecoded.user},{$set:{"secret":newSecret}});

    res.status(200).json({
      Message: "Secreto modificado",
      User: userData,
      NewUser: newSecret,
      Ok: true,
      data: "ok",
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
