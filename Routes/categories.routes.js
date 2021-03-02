const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categories.controller')


// register Categories
router.post('/register', categoriesController.createCategories)

// get all Categories
router.get('/all',  categoriesController.findAll)

// get one Categories
router.get('/:id',  categoriesController.findOne)




module.exports = router