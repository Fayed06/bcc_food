const db = require("../models");
const restaurants = db.restaurants;
const restoimg = db.restoimg;

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
  restaurants.findAll({
      // where: {
      //   main: true
      // },
      include: [
        {
          model: restoimg,
          where: {
            main: true
          },
          required: false
        }
      ]
    })
    .then((data) => {
      const response = {
        status: "success",
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

// findOne
function findOne(req, res, next) {
  const id = req.params.id;
  restaurants.findByPk(id)
    .then((data) => {
      res.send(data);
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