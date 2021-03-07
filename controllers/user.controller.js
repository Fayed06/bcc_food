const db = require("../models");
const User = db.user;
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


// create User
function registerUser(req, res, next) {
  User.create({
      ...req.body,
      image: process.env.DEFAULT_IMAGE
    })
    .then((data) => {
      const payload = {
        id: data.id,
        name: data.name,
        image: data.image
      }
      const token = jwt.sign(payload, process.env.JWT_TOKEN)
      res.status(200).send({
        status : "success",
        message:"",
        data,
        token
      });
    })
    .catch((err) => {
      if (err.name == 'SequelizeUniqueConstraintError') {
        const failResponse = {
          success: 'false',
          error: {
            details: _.map(err.errors, ({
              message,
              type
            }) => ({
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

  User.findOne({
      where: {
        email
      }
    })
    .then((data) => {
      if (data != null) {
        const payload = {
          id: data.id,
          name: data.name,
          image: data.image
        }
        const token = jwt.sign(payload, process.env.JWT_TOKEN)
        bcrypt.compare(password, data.password).then((result) => {
          if (result == true) {
            res.status(200).send({
              status: "success",
              message:"",
              data,
              token
            });
          } else {
            res.status(400).send({
              message: "Wrong Password",
            });
          }
        });
      } else {
        res.status(400).send({
          message: "Wrong Email"
        });
      }
    })
    .catch((err) => {
      if (err.name == 'SequelizeUniqueConstraintError') {
        const failResponse = {
          success: 'error',
          error: err
        }
        return res.status(422).send(failResponse)
      }
      return next(err)
    });
}
//cari satu user
function findOne(req, res, next) {
  const id = req.params.id;
  User.findByPk(id)
    .then((data) => {
      const response = {
        status: "success",
        message:"",
        data
      }
      if (data == null) {
        res.status(404).send({
          message: "Error User Not found",
        });

      }
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error in findOne",
      });
    });
}

//nampilkan semua user
function findAll(req, res, next) {
  User.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error in findAll",
      });
    });
}

function destroy(req, res, next) {
  const id = req.params.id;
  let condition = {
    id: id,
  };

  User.destroy({
      where: condition,
    })
    .then((num) => {
      if (num != 1) {
        return next(err)
      }
      res.status(200).send({
        message: "Delete successful",
      });
    })
    .catch((err) => {
      return next(err)
    });
}
module.exports = {
  registerUser,
  loginUser,
  findOne,
  findAll,
  destroy,
};