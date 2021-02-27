const db = require("../models");
const User = db.user;
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


// create User
function registerUser(req, res, next) {
  User.create({ ...req.body, image: process.env.DEFAULT_IMAGE})
    .then((data) => {
      const payload = {
        id:data.id,
        name: data.name,
        image: data.image
      }
      const token = jwt.sign(payload, process.env.JWT_TOKEN)
      res.status(200).send({...data.dataValues, token});
    })
    .catch((err) => {
      if(err.name == 'SequelizeUniqueConstraintError'){
        const failResponse = {
            success : 'false',
            error : {
                details : _.map(err.errors,({message , type})=>({
                    message,
                    type
                }))
            }
        }
        return res.status(422).send(failResponse)
      }
      return next(err)
    });
}

// login User
function loginUser(req, res, next) {
  const {
    email,
    password,
  } = req.body

  User.findOne({where: { email }})
    .then((data) => {
      const payload = {
        id:data.id,
        name: data.name,
        image: data.image
      }
      const token = jwt.sign(payload, process.env.JWT_TOKEN)
      if (data != null) {
        bcrypt.compare(password, data.password).then((result) => {
          if (result == true) {
            res.status(200).send({...data.dataValues,token});
          } else {
            res.status(400).message("Wrong Password")
          }
        })
      } else {
        res.status(400).message("Wrong Email")        
      }
    })
    .catch((err) => {
      if(err.name == 'SequelizeUniqueConstraintError'){
        const failResponse = {
            success : 'false',
            error : {
                details : _.map(err.errors,({message , type})=>({
                    message,
                    type
                }))
            }
        }
        return res.status(422).send(failResponse)
      }
      return next(err)
    });
}

module.exports = {
    registerUser,
    // findAll,
    loginUser,
    // update,
    // destroy,
  };