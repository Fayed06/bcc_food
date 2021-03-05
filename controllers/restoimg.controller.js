const db = require("../models");
const restoimg = db.restoimg;

  // findAll
  function findAll(req, res, next) {
    restoimg.findAll()
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