const db = require("../models");
const booking = db.booking;
const food = db.food;
const bookingfood = db.bookingfood
const jwt = require("jsonwebtoken");

// create booking
function regbooking(req, res, next) {
  try {
    jwt.verify(req.token, process.env.JWT_TOKEN, async (err, AuthData) => {
      if (err) {
        res.sendStatus(403)
      } else {
        const bookingData = {
          ...req.body,
          userId: AuthData.id
        }
        if (req.body.foods) delete bookingData["foods"];

        let bookingCreated = await booking.create(bookingData)

        const {
          foods
        } = req.body
        let bookingPrice = 0

        if (foods) {
          for (let i = 0; i < foods.length; i++) {
            const foodData = await food.findByPk(foods[i].foodId)

            bookingPrice = bookingPrice + (foodData.price * foods[i].quantity)

            const bookingFoodDdata = {
              bookingId: bookingCreated.id,
              foodId: foodData.id,
              quantity: foods[i].quantity,
              sub_price: foodData.price * foods[i].quantity
            }

            await bookingfood.create(bookingFoodDdata)
          }

          await booking.update({
            total_price: bookingPrice
          }, {
            where: {
              id: bookingCreated.id
            }
          })

          bookingCreated = await booking.findByPk(bookingCreated.id)
        }

        const response = {
          status: "success",
          message: "berhasil menambahkan booking",
          data : bookingCreated
        }
        res.status(201).send(response);
      }
    })

  } catch (e) {
    console.log(e)
  }

}

function findAll(req, res, next) {
  try {
    const id = req.params.id;
    jwt.verify(req.token, process.env.JWT_TOKEN, (err, AuthData) => {
      if (err) {
        res.sendStatus(403)
      } else {
        const hasil = {
          AuthData,
        }
        booking.findAll({
            where: {
              userId: id,
            },
          })
          .then((data) => {
            const response = {
              status: "success",
              message: "",
              data,
            }
            res.send(response);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message,
            });
          });
      }
    })
  } catch (e) {
    console.log(e)
  }

}


module.exports = {
  regbooking,
  findAll,
}