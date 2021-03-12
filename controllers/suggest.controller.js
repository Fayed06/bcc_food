const db = require("../models");
const suggest = db.suggest;

// create 
function reg(req, res, next) {
  suggest.create(req.body)
    .then((data) => {
      const response = {
        status: "success",
        message: "berhasil memasukan kritik dan saran",
        data
      }
      res.status(201).send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
}

function findAll(req, res, next) {
  suggest.findAll()
    .then((data) => {
      const response = {
        status: "success",
        message: "Berhasil menampilkan semua feedback",
        data
      }
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
}
module.exports = {
  reg,
  findAll,
}