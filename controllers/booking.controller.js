const db = require("../models");
const booking = db.booking;
const jwt = require("jsonwebtoken");

// create booking
function regbooking(req, res, next) {
  try {
    jwt.verify(req.token, process.env.JWT_TOKEN, (err, AuthData) => {
      if (err) {
        res.sendStatus(403)
      } else {
        const hasil = {
          AuthData
        }

        booking.create({
            ...req.body,
            userId: AuthData.id
          })
          .then((data) => {
            if (data.total_price == null) {
              data.total_price = 0
            }
            const response = {
              status: "success",
              message: "berhasi menambahkan booking",
              data
            }
            res.status(201).send(response);
          })
          .catch((err) => {
            res.status(500).send({
              message: err,
            });
          });
      }
    })

  } catch (e) {
    console.log(e)
  }

}

function findAll(req, res, next) {
  try {
    const id = req.params.id;
    jwt.verify(req.token, process.env.JWT_TOKEN, (err, AuthData) => {
      if (err) {
        res.sendStatus(403)
      } else {
        const hasil = {
          AuthData,
        }
        booking.findAll({
          where: {
            userId: id,
          },
          total_price: 0
        })
        .then((data) => {
          const response = {
            status: "success",
            message: "",
            data,
          }
          res.send(response);
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message,
          });
        });
      }
    })
  } catch (e) {
    console.log(e)
  }
  
}


  module.exports = {
    regbooking,
    findAll,
  }