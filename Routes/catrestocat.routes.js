const express = require('express')
const router = express.Router()
const catrestocatController = require('../controllers/catrestocat.controller')


// register Categories
// router.post('/register', catrestocatController.regCategories)

// get all Categories
router.get('/all',  catrestocatController.findAll)

// get one Categories
// router.get('/:id',  catrestocatController.findOne)
module.exports = router