const db = require("../models");
const restaurants = db.restaurants;

// create restaurants
function regRestaurants(req, res, next) {
    restaurants.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:err, 
        });
      });
  }

  // findAll
function findAll(req, res, next) {
    restaurants.findAll()
      .then((data) => {
        res.send(data);
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