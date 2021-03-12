const db = require("../models");
const review = db.review;
const user = db.user;
const booking= db.booking;

// create 
function reg(req, res, next) {
  review.create(req.body)
    .then((data) => {
      const response = {
        status: "success",
        message: "berhasil memasukan ulasan",
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

function findAll(req, res, next) {
  review.findAll({
    include:[{
      model : booking,
      include: [{
        model : user,
      }]
  
    }]
  })
    .then((data) => {
      const response = {
        status: "success",
        message: "Berhasil menampilkan semua review",
        data
      }
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
}

module.exports = {
  reg,
  findAll,
}