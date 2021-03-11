module.exports = (sequelize, Sequelize, restaurants, user) => {
  const booking = sequelize.define("booking", {
    restaurantId: {
      type: Sequelize.INTEGER,
      references: {
        model: restaurants,
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
    datetime : {
      type: Sequelize.STRING,
      allowNull: false,
    },
    time: {
      type: Sequelize.ENUM('08 : 00', '09 : 00', '10 : 00', '11 : 00', '12 : 00', '13 : 00', '14 : 00', '15 : 00', '16 : 00', '17 : 00', '18 : 00', '19 : 00', '20 : 00', '21 : 00')
    },
    number_of_seat: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    place: {
      type: Sequelize.ENUM('indoor', 'outdoor')
    },
    total_price: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },


  }, {})
  return booking
}