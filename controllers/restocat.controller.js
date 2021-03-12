const db = require("../models");
const Restocats = db.restocats;
const restaurants = db.restaurants;
const restoimg = db.restoimg;

// findAll
function findAll(req, res, next) {
  const limit = req.query.limit ? parseInt(req.query.limit) : null
  Restocats.findAll({
      include: [{
        model: restaurants,
      }],
      limit
    })
    .then((data) => {
      const response = {
        status: "success",
        message: "Berhasil mengambil semua data kategori restaurant",
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
        include: [{
          model: restoimg,
          where: {
            main: true
          },
          required: false
        }]

      }]
    })
    .then((data) => {
      const response = {
        status: "success",
        message: "berhasil menampilkan restaurant berdasarkan kategori",
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
  findAll,
  findOne,
}