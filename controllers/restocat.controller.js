const db = require("../models");
const Restocats = db.restocats;
const restaurants = db.restaurants;

// create categories
function regCategories(req, res, next) {
  Restocats.create({
      ...req.body,
      image: process.env.DEFAULT_IMAGE
    })
    .then((data) => {
      res.send({
        ...data.dataValues
      });
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
  Restocats.findAll({
      include: restaurants,
      limit
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
        message: err.message,
      });
    });
}

// findOne
function findOne(req, res, next) {
  const id = req.params.id;
  Restocats.findByPk(id, {
      include: [{
        model: restaurants,
      }]
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
        message: err.message,
      });
    });
}
// delete
function destroy(req, res, next) {
  const id = req.params.id;
  let condition = {
    id: id,
  };

  Restocats.destroy({
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
  regCategories,
  findAll,
  findOne,
  destroy,
}