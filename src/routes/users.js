const route = require('express').Router();
const md5 = require("md5");
const user = require('../models/User');
const cryptoRandomString = require('crypto-random-string');
const jwt = require('jsonwebtoken'); //HMAC SHA256
const { requireEmailAndPassword } = require('../middlewares/requiredFields');

// Endpoints relativos a Users
route.post('/register', [requireEmailAndPassword], (req, res, next) => {

    const email = req.params.email;
    const pass = md5(req.body.pass);
    const secret = cryptoRandomString({length: 10, type: 'base64'});

    const payload = {
        "user": email,
        //"exp": Math.floor(Date.now() / 1000) + (60 * 60),
        }
    const token = jwt.sign(payload, secret);

  try {
    passport.authenticate('register', (err, user) => {
      if (err) {
        return res.status(402).json({ data: err.message });
      }

      req.logIn(user, (loginErr) => {
        if (loginErr) {
          return res.status(401).json({ data: loginErr.message });
        }

        res.status(200).json({ data: user });
      });
    })(req, res, next);

  } catch (err) {
    console.log(err);
    res.status(500).json({ data: err.message });
  }
});

route.post('/login', [requireEmailAndPassword], (req, res, next) => {
  try {
    passport.authenticate('login', (err, user) => {
      if (err) {
        return res.status(500).json({ data: err.message });
      }

      req.logIn(user, (loginErr) => {
        if (loginErr) {
          return res.status(401).json({ data: loginErr.message });
        }

        res.status(200).json({ data: user });
      });
    })(req, res, next);
  } catch (err) {
    console.log(err);
    res.status(500).json({ data: err.message });
  }
});

route.post('/logout', (req, res, next) => {
  try {
    // Invalidamos la sesión del usuario
    req.logOut();
    // Borramos la sesión de Mongo (colección sessions)
    req.session.destroy();
    // Borramos la cookie de sesión connect.sid
    res.clearCookie('connect.sid', { path: '/' });

    res.status(200).json({ data: 'OK' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ data: err.message });
  }
});

module.exports = route;
