const db = require("../models");
const food = db.food;
const restaurants = db.restaurants;

// create 
function reg(req, res, next) {
  food.create(req.body)
    .then((data) => {
      const response = {
        status: "success",
        message: "",
        data
      }
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
}

// findAll
function findAll(req, res, next) {
  food.findAll({
      include: [{
        model: restaurants,

      }],
      // // limit
    })
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
        message: err.message,
      });
    });
}

// findOne
function findOne(req, res, next) {
  const id = req.params.id;
  food.findAll({where:{restaurantId: id}})

    .then((data) => {
      const response = {
        status: "success",
        message: "",
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
  reg,
  findAll,
  findOne,
}