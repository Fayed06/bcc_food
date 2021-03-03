const db = require("../models");
const Categories = db.categories;

// create categories
function regCategories(req, res, next) {
    Categories.create({ ...req.body, image: process.env.DEFAULT_IMAGE})
      .then((data) => {
        res.send({...data.dataValues});
      })
      .catch((err) => {
        res.status(500).send({
          message:err, 
        });
      });
  }

  // findAll
function findAll(req, res, next) {
    Categories.findAll()
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
    Categories.findByPk(id)
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
      regCategories,
      findAll,
      findOne,
  }