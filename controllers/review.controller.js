const db = require("../models");
const review = db.review;

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

module.exports = {
  reg,
}