
const { Sequelize } = require('sequelize')
const env = process.env

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,

    pool: {
        max: 3,
        min: 0,
        idle: 3000,
        acquire: 10000
    },
})

const user = require("./user.model")(sequelize, Sequelize)
const restaurants = require("./restaurants.model")(sequelize, Sequelize)
const restocats = require("./restocat.model")(sequelize, Sequelize)
const CatRestocat = require("./CatRestocat.model")(sequelize, Sequelize, restaurants, restocats)
const restoimg = require("./resto.img.model")(sequelize, Sequelize, restaurants)
const food = require("./food.model")(sequelize, Sequelize, restaurants)
const foodCategory = require("./food_categories.model")(sequelize, Sequelize)
const foodhascategory = require("./foodhascategory.model")(sequelize, Sequelize, restaurants, foodCategory)

restaurants.belongsToMany(restocats,{through :'CatRestocat'})
restocats.belongsToMany(restaurants,{through :'CatRestocat'})
restaurants.hasMany(restoimg)
restoimg.belongsTo(restaurants)
restaurants.hasMany(food)
food.belongsTo(restaurants)
food.belongsToMany(foodCategory,{through :'food_has_categories'})
foodCategory.belongsToMany(food,{through :'food_has_categories'})


module.exports = {
    Sequelize,
    sequelize,

    // defining models
    user,
    CatRestocat,
    restaurants,
    restocats,
    restoimg,
    food,
    foodCategory,
    foodhascategory,
}