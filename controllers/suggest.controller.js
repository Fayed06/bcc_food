const db = require("../models");
const suggest = db.suggest;

// create 
function reg(req, res, next) {
  suggest.create(req.body)
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

module.exports = {
  reg,
}