const route = require('express').Router();
const md5 = require("md5");
const User = require('../models/User');
const cryptoRandomString = require('crypto-random-string');
const jwt = require('jsonwebtoken'); //HMAC SHA256

// Endpoints relativos a Users

route.post('/register', (req, res) => {  
    
  const email = req.body.email;
  const pass =  req.body.pass;
  const payload = { "user": email }; 
  const secret = cryptoRandomString({length: 10, type: 'base64'}); 
  const token = jwt.sign(payload, secret);
  
  try{      
        const newUser = new User({email: email, password: pass, secret: secret});
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
        // const userData = User.findOne({email:email});      
          
        // if (userData === null) {
        //     res.status(200).json({
        //       message: "Lectura correcta",
        //       data: jwt.sign(payload, secret),
        //       ok: true,
        //     })  
        // }
        // else if (userData != null) {
        //     res.status(400).json({
        //     ok: false,
        //     })
        // }

        const userData = User.findOne({email:email}, (err, user)=>{
          if (user != null){
                res.status(200).json({
                  message: "Lectura correcta",
                  data: jwt.sign(payload, secret),
                  ok: true,
                })  
          }
          else if (user == null) {
                res.status(400).json({
                message: console.error(),
                ok: false,
                })
          }
        })
      }
        catch (err) {
          console.log(err);
          res.status(500).json({
            
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
