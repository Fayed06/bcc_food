module.exports = (sequelize, Sequelize, restaurants) => {
  const food = sequelize.define("food", {
    restaurantId: {
      type: Sequelize.INTEGER,
      references: {
        model: restaurants,
        key: 'id'
      }
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipe: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
    }


  }, {})
  return food
}