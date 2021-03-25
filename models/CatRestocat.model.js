module.exports = (sequelize, Sequelize, restaurants, restocats) => {
  const CatRestocat = sequelize.define("CatRestocat", {
    restaurantId: {
      type: Sequelize.INTEGER,
      references: {
        model: restaurants,
        key: 'id'
      }
    },
    restocatId: {
      type: Sequelize.INTEGER,
      references: {
        model: restocats,
        key: 'id'
      }
    }

    

  }, {})
  return CatRestocat
}