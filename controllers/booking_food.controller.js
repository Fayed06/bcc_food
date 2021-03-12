const db = require("../models");
const bookingfood = db.bookingfood
const food = db.food

// create booking food
function reg(req, res, next) {
  bookingfood.findAll({ include:[{model:food}]}).create(req.body)
  .then((data) => {
    let response = {
      data
    }
    res.send(response)
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