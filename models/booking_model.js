module.exports = (sequelize, Sequelize, restaurants, bookingpacket, user) => {
  const booking = sequelize.define("booking", {
    restaurantId: {
      type: Sequelize.INTEGER,
      references: {
        model: restaurants,
        key: 'id'
      }
    },
    bookingpacketId: {
      type: Sequelize.INTEGER,
      references: {
        model: bookingpacket,
        key: 'id'
      }
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: user,
        key: 'id'
      }
    },
    number_of_seat: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    // total_price: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    // },


  }, {})
  return booking
}