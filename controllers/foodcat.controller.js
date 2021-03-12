const db = require("../models");
const foodCategory =db.foodCategory

function findAll(req, res, next) {
  foodCategory.findAll()
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
        message: "Error in findAll",
      });
    });
}


module.exports = {

  findAll,

}