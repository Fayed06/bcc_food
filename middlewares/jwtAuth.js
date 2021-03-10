const jwt = require('jsonwebtoken')


function verifyToken(req, res, next) {
    try {
      const bearerHeader = req.headers['authorization'];
      if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
      } else {
        res.sendStatus(403);
      }
    } catch (err) {
      console.log(err)
    }
      
  }
module.exports = verifyToken
