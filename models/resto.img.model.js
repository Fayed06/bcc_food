module.exports = (sequelize, Sequelize, restaurants) => {
  const restoimg = sequelize.define("restoimg", {
    restaurantId: {
      type: Sequelize.INTEGER,
      references: {
        model: restaurants,
        key: 'id'
      }
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    main: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },


  }, {})
  return restoimg
}