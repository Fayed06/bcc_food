module.exports = (sequelize, Sequelize, booking, food) => {
  const bookingfood = sequelize.define("booking_food", {
    bookingId: {
      type: Sequelize.INTEGER,
      references: {
        model: booking,
        key: 'id'
      }
    },
    foodId: {
      type: Sequelize.INTEGER,
      references: {
        model: food,
        key: 'id'
      }
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sub_price: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },

  }, {})
  return bookingfood
}