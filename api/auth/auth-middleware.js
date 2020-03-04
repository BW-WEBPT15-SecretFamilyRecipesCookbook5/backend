const jwt = require('jsonwebtoken');
const secrets = require('../secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
          if(err) {
              res.status(401).json({message: 'Unauthorized'});
          } else {
              next();
          };
      });
  } else {
      res.status(400).json({message: 'Must be logged in'});
  }
};
