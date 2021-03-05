const db = require("../models");
const CatRestocat = db.CatRestocat;

  // findAll
  function findAll(req, res, next) {
    CatRestocat.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error in findAll",
        });
      });
  }

  module.exports = {
 
    findAll,
  
}