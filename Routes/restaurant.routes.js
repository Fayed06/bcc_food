const express = require('express')
const router = express.Router()
const restaurantsController = require('../controllers/restaurants.controller')


// register restaurants
router.post('/register', restaurantsController.regRestaurants)

// get all restaurants
router.get('/all', restaurantsController.findAll)

// get one restaurants
router.get('/:id', restaurantsController.findOne)

router.delete('/delete/:id', restaurantsController.destroy)

module.exports = router