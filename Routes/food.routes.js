const express = require('express')
const router = express.Router()
const foodController = require('../controllers/food.controller')


// register food
router.post('/register', foodController.reg)

// // get all food
router.get('/all', foodController.findAll)

// // get all Minuman
router.get('/drink/:id', foodController.GetDrink)

// get all Makanan
router.get('/foods/:id', foodController.GetFood)


module.exports = router