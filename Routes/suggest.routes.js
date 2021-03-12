const express = require('express')
const router = express.Router()
const suggestController = require('../controllers/suggest.controller')


// register routes
router.post('/reg', suggestController.reg)

router.get('/all', suggestController.findAll)


module.exports = router