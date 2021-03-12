const express = require('express')
const router = express.Router()
const restaurantsController = require('../controllers/restaurants.controller')
const jwtmiddlewares= require('../middlewares/jwtAuth')
const reviewController = require('../controllers/review.controller')

// register restaurants
router.post('/register', restaurantsController.regRestaurants)

// get all restaurants
router.get('/all', restaurantsController.findAll)

// get one restaurants
router.get('/:id', restaurantsController.findOne)

router.post('/:id/create/review', jwtmiddlewares, reviewController.reg)

module.exports = router