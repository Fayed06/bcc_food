
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

//define routes
const user = require("./user.model")(sequelize, Sequelize)
const restaurants = require("./restaurants.model")(sequelize, Sequelize)
const restocats = require("./restocat.model")(sequelize, Sequelize)
const CatRestocat = require("./CatRestocat.model")(sequelize, Sequelize, restaurants, restocats)
const restoimg = require("./resto.img.model")(sequelize, Sequelize, restaurants)
const food = require("./food.model")(sequelize, Sequelize, restaurants)
const foodCategory = require("./food_categories.model")(sequelize, Sequelize)
const foodhascategory = require("./foodhascategory.model")(sequelize, Sequelize, restaurants, foodCategory)
const bookingpacket = require("./booking_packet.model")(sequelize, Sequelize)
const booking = require("./booking_model")(sequelize, Sequelize, restaurants, bookingpacket, user)
// const bookingfood = require("./booking_food.model")(sequelize, Sequelize, booking, food)
const review = require("./review.model")(sequelize, Sequelize, booking)

//define relationship
restaurants.belongsToMany(restocats,{through :'CatRestocat'})
restocats.belongsToMany(restaurants,{through :'CatRestocat'})
restaurants.hasMany(restoimg)
restoimg.belongsTo(restaurants)
restaurants.hasMany(food)
food.belongsTo(restaurants)
food.belongsToMany(foodCategory,{through :'food_has_categories'})
foodCategory.belongsToMany(food,{through :'food_has_categories'})
restaurants.hasMany(booking)
booking.belongsTo(restaurants)
bookingpacket.hasMany(booking)
booking.belongsTo(bookingpacket)
user.hasMany(booking)
booking.belongsTo(user)
// booking.hasOne(bookingfood)
// bookingfood.belongsTo(booking)
// food.hasMany(bookingfood)
// bookingfood.belongsTo(food)
booking.hasOne(review)
review.belongsTo(booking)

// sequelize.sync({alter: true, force : true})
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
    bookingpacket,
    booking,
    // bookingfood,
    review,
}