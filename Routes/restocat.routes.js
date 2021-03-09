const express = require('express')
const router = express.Router()
const restocatController = require('../controllers/restocat.controller')


// register Categories
router.post('/register', restocatController.regCategories)

// get all Categories
router.get('/all', restocatController.findAll)

// get one Categories
router.get('/:id', restocatController.findOne)

router.delete('/delete/:id', restocatController.destroy)





module.exports = router