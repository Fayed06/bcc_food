const {
    Sequelize
} = require('sequelize')
const env = process.env

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,

    pool: {
        max: 5,
        min: 0,
        idle: 3000,
        acquire: 10000
    },
})

//define routes
const user = require("./user.model")(sequelize, Sequelize)
const restaurants = require("./restaurants.model")(sequelize, Sequelize)
const restocats = require("./restocat.model")(sequelize, Sequelize)
const CatRestocat = require("./CatRestocat.model")(sequelize, Sequelize, restaurants, restocats)
const restoimg = require("./resto.img.model")(sequelize, Sequelize, restaurants)
const food = require("./food.model")(sequelize, Sequelize, restaurants)
const foodCategory = require("./food_categories.model")(sequelize, Sequelize)
const foodhascategory = require("./foodhascategory.model")(sequelize, Sequelize, restaurants, foodCategory)
// const bookingpacket = require("./booking_packet.model")(sequelize, Sequelize)
const booking = require("./booking_model")(sequelize, Sequelize, restaurants, user)
const bookingfood = require("./booking_food.model")(sequelize, Sequelize, booking, food)
const review = require("./review.model")(sequelize, Sequelize, booking)
const suggest = require("./suggest.model")(sequelize, Sequelize)

//define relationship
restaurants.belongsToMany(restocats, {through: 'CatRestocat'})
restocats.belongsToMany(restaurants, {through: 'CatRestocat'})
restaurants.hasMany(restoimg)
restoimg.belongsTo(restaurants)
restaurants.hasMany(food)
food.belongsTo(restaurants)
food.belongsToMany(foodCategory, {through: 'food_has_categories'})
foodCategory.belongsToMany(food, {through: 'food_has_categories'})
restaurants.hasMany(booking)
booking.belongsTo(restaurants)
user.hasMany(booking)
booking.belongsTo(user)
booking.belongsToMany(food, {through: bookingfood})
food.belongsToMany(booking, {through: bookingfood})
booking.hasOne(review)
review.belongsTo(booking)

// sequelize.sync({alter: true})
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
    // bookingpacket,
    booking,
    bookingfood,
    review,
    suggest,
}