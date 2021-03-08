const express = require('express')
const router = express.Router()
const foodController = require('../controllers/food.controller')


// register restaurants
router.post('/register',foodController.reg)

// // get all restaurants
// router.get('/all',  restaurantsController.findAll)

// // get one restaurants
// router.get('/:id', restaurantsController.findOne)

// router.delete('/delete/:id', restaurantsController.destroy)

module.exports = router