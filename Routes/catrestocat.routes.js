const express = require('express')
const router = express.Router()
const catrestocatController = require('../controllers/catrestocat.controller')


// get all Categories
router.get('/all', catrestocatController.findAll)

module.exports = router