const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')


// register user
router.post('/register', userController.registerUser)

// login
router.post('/login',  userController.loginUser)

//getone
router.get('/:id', userController.findOne)

//getall
router.get('/all', userController.findAll)

router.delete('/delete/:id', userController.destroy)

module.exports = router