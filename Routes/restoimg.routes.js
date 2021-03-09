const express = require('express')
const router = express.Router()
const restoimgController = require('../controllers/restoimg.controller')

// get all Categories
router.get('/all',  restoimgController.findAll)


module.exports = router