const route = require('express').Router();
const md5 = require("md5");
const User = require('../models/User');
const cryptoRandomString = require('crypto-random-string');
const jwt = require('jsonwebtoken'); //HMAC SHA256

// Endpoints relativos a Users

route.post('/register', (req, res) => {  
    
  const email = req.body.email;
  const pass =  md5(req.body.pass);
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
            status: 200,
        });
        }
        catch(err) {
            console.log(err);
            return res.status(400).json({
            ok: false,
            data: err.message,
            status: 400,
            });
        }
});

route.get('/login/:email', (req, res) => {
    const email = req.params.email;  
    const payload = { "user": email }; 
    try {
        const userData = User.findOne({email:email}, (err, user)=>{
          if (user != null){
                res.status(200).json({
                  message: "Lectura correcta",
                  data: jwt.sign(payload, user.secret),
                  status: 200,
                  ok: true,
                })  
          }
          else if (user == null) {
                res.status(400).json({
                message: console.error(),
                status: 400,
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

route.get('/logout/:localSotrageId', async (req, res) => {
    const localSotrageId = req.params.localSotrageId;
    const newSecret = cryptoRandomString({length: 10, type: 'base64'});
  try {
    if (localSotrageId != ""){
      const tokenDecoded = jwt.decode(localSotrageId); 
      const userData = await User.findOneAndUpdate({email: tokenDecoded.user},{$set:{"secret":newSecret}})
        
        res.status(200).json({
          Message: "Secreto modificado",
          User: userData,
          NewUser: newSecret,
          Ok: true,
          data: "ok",
          url: "http://localhost:4000/index.html",
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

route.get('/authentication/:localSotrageId', async (req, res) => {
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
        status: 200,
      });
};
} catch (err) {
  console.log(err);
  res.status(400).json({
    Message: "Token desconocido o inválido",
    Ok: false,
    status: 200,
  });
}
});

module.exports = route;
