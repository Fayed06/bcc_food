module.exports = (sequelize, Sequelize, booking) => {
  const review = sequelize.define("review", {
    bookingId: {
      type: Sequelize.INTEGER,
      references: {
        model: booking,
        key: 'id'
      }
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    star: {
      type: Sequelize.INTEGER,
      allowNull: true,
    }


  }, {})
  return review
}