const express = require('express')
const router = express.Router()
const restocatController = require('../controllers/restocat.controller')




// get all Categories
router.get('/all', restocatController.findAll)

// get one Categories
router.get('/:id', restocatController.findOne)







module.exports = router