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
        image: data.image,
        email: data.email,
        phone: data.phone
      }
      const token = jwt.sign(payload, process.env.JWT_TOKEN)
      res.status(201).send({
        status: "success",
        message: "Registrasi berhasil",
        data: {
          token: token
        }
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
          image: data.image,
          email: data.email,
          phone: data.phone
        }
        const token = jwt.sign(payload, process.env.JWT_TOKEN)
        bcrypt.compare(password, data.password).then((result) => {
          if (result == true) {
            res.status(200).send({
              status: "success",
              message: "Login Berhasil",
              data: {
                token: token
              }
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

//nampilkan semua user
function findAll(req, res, next) {
  User.findAll()
    .then((data) => {
      const response = {
        status: "success",
        message: "",
        data: data,
      }
      res.send(response);
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

function profile(req, res) {
  try {
    jwt.verify(req.token, process.env.JWT_TOKEN, (err, AuthData) => {
      if (err) {
        res.sendStatus(403)
      } else {
        const response = {
          status: "success",
          message: "Data berhasil didapatkan",
          data: AuthData,
        }
        res.send(response);
      }
    })
  } catch (e) {
    console.log(e)
  }
}


module.exports = {
  registerUser,
  loginUser,
  findAll,
  destroy,
  profile,

};