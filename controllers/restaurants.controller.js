const db = require("../models");
const restaurants = db.restaurants;
const restoimg = db.restoimg;
const food = db.food;
const restocats = db.restocats;
;

// create restaurants
function regRestaurants(req, res, next) {
  restaurants.create(req.body)
    .then((data) => {
      res.send(data);
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
  const offset = req.query.offset ? parseInt(req.query.offset) : null
  restaurants.findAll({
      // where: {
      //   main: true
      // },
      include: [{
        model: restoimg,
        where: {
          main: true
        },
        required: false
      }, {
        model: food
      },{
        model :restocats
      } ],
      limit, offset
    })
    .then((data) => {
      // // console.log(data)
      // // console.log("==========================")
      // for (let i = 0; i < data.length; i++) {
      //   let tot = 0
      //   for (let j = 0; j < data[i].food.length; j++) {
      //     // rata2 = total harga / banyak makanan
      //     // total harga =+ harga makanan
      //     tot += data[i].food[j].price
      //   }
      //   let rata = Math.round(tot / data[i].food.length)
      //   let dollar = 0
      //   if (rata < 25000) {
      //     dollar = 1
      //   } else if (rata < 75000) {
      //     dollar = 2
      //   } else if (rata < 150000) {
      //     dollar = 3
      //   } else if (rata > 150000) {
      //     dollar = 4
      //   } else {
      //     dollar = 0
      //   }
      //   data[i].setDataValue("dollar", dollar)
      // }
      const response = {
        status: "success",
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

// findOne
function findOne(req, res, next) {
  const id = req.params.id;
  restaurants.findByPk(id)
    .then((data) => {
      const response = {
        status: "success",
        data: data
      }
      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error in findOne",
      });
    });
}

function destroy(req, res, next) {
  const id = req.params.id;
  let condition = {
    id: id,
  };

  restaurants.destroy({
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
  regRestaurants,
  findAll,
  findOne,
  destroy,
}