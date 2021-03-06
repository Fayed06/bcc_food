module.exports = (sequelize, Sequelize, food, foodCategory) => {
  const fooodhascategory = sequelize.define("food_has_categories", {
    foodId: {
      type: Sequelize.INTEGER,
      references: {
        model: food,
        key: 'id'
      }
    },
    foodCategoryId: {
      type: Sequelize.INTEGER,
      references: {
        model: foodCategory,
        key: 'id'
      }
    }


  }, {})
  return fooodhascategory
}