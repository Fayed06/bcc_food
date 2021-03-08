module.exports = (sequelize, Sequelize, booking) => {
  const review = sequelize.define("review", {
    bookingId: {
      type: Sequelize.INTEGER,
      references: {
        model: booking,
        key: 'id'
      }
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },


  }, {})
  return review
}