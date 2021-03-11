const express = require('express')
const router = express.Router()
const suggestController = require('../controllers/suggest.controller')
const joiMiddleware = require("../middlewares/joiValidator")


// register routes
router.post('/reg', suggestController.reg)

module.exports = router