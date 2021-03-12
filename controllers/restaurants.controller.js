const db = require("../models");
const restaurants = db.restaurants;
const restoimg = db.restoimg;
const food = db.food;

// create restaurants
function regRestaurants(req, res, next) {
  restaurants.create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
}

// findAll
function findAll(req, res, next) {
  const limit = req.query.limit ? parseInt(req.query.limit) : null
  const offset = req.query.offset ? parseInt(req.query.offset) : null
  restaurants.findAll({
      include: [{
        model: restoimg,
        where: {
          main: true
        },
        required: false
      }, {
        model: food
      }, ],
      limit,
      offset
    })
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let tot = 0
        for (let j = 0; j < data[i].food.length; j++) {
          tot += data[i].food[j].price
        }
        let rata = Math.round(tot / data[i].food.length)
        let dollar = 0
        if (rata < 25000) {
          dollar = 1
        } else if (rata < 75000) {
          dollar = 2
        } else if (rata < 150000) {
          dollar = 3
        } else if (rata > 150000) {
          dollar = 4
        } else {
          dollar = 0
        }
        data[i].setDataValue("dollar", dollar)
      }
      const response = {
        status: "success",
        message: "berhasi mengambil data semua restaurant",
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

// findOne
function findOne(req, res, next) {
  const id = req.params.id;
  restaurants.findByPk(id, {
      include: [{
        model: restoimg,
        where: {
          main: false
        },
        required: false
      }, {
        model: food
      }, ],
    })
    .then((data) => {
      const response = {
        status: "success",
        message: "Berhasil mengambil data restaurant",
        data
      }
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error in findOne",
      });
    });
}



module.exports = {
  regRestaurants,
  findAll,
  findOne,
}