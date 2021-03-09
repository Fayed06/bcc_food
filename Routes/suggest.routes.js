const express = require('express')
const router = express.Router()
const suggestController = require('../controllers/suggest.controller')


// register restaurants
router.post('/register',suggestController.reg)

module.exports = router