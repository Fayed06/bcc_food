const express = require('express')
const router = express.Router()
const foodController = require('../controllers/food.controller')


// register food
router.post('/register',foodController.reg)

// // get all food
router.get('/all',  foodController.findAll)

// // get one restaurants
router.get('/:id', foodController.findOne)


module.exports = router