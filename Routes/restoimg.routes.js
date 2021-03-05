const express = require('express')
const router = express.Router()
const restoimgController = require('../controllers/restoimg.controller')


// register Categories
// router.post('/register', catrestocatController.regCategories)

// get all Categories
router.get('/all',  restoimgController.findAll)

// get one Categories
// router.get('/:id',  catrestocatController.findOne)
module.exports = router