const db = require("../models");
const CatRestocat = db.CatRestocat;

// findAll
function findAll(req, res, next) {
  CatRestocat.findAll()
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

module.exports = {
  findAll,

}