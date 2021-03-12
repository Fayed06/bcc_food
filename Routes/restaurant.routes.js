const express = require('express')
const router = express.Router()
const restaurantsController = require('../controllers/restaurants.controller')
const jwtmiddlewares= require('../middlewares/jwtAuth')
const reviewController = require('../controllers/review.controller')
const foodcatcontroller = require('../controllers/foodcat.controller')

// register restaurants
router.post('/register', restaurantsController.regRestaurants)

// get all restaurants
router.get('/all', restaurantsController.findAll)

router.get('/all/cat', foodcatcontroller.findAll)

router.post('/:id/create/review', jwtmiddlewares, reviewController.reg)

router.get('/:id/reviews', jwtmiddlewares, reviewController.findAll)

// get one restaurants
router.get('/:id', restaurantsController.findOne)




module.exports = router