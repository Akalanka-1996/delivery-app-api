const User = require('../models/user.model')
const asyncHandler = require('express-async-handler')

const isAdmin =  asyncHandler((req, res, next) => {
    if (req.user && req.user.isSupplier) {
      next();
    } else {
      res.status(401).send({ message: 'Invalid Admin Token' });
    }
  });
  
module.exports = {isAdmin}