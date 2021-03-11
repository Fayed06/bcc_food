const express = require('express')
const router = express.Router()
const bookingcontroller = require('../controllers/booking.controller')
const jwtmiddlewares= require('../middlewares/jwtAuth')

router.post('/create', jwtmiddlewares, bookingcontroller.regbooking)

router.get('/find/:id',jwtmiddlewares, bookingcontroller.findAll)

module.exports = router