const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const {verifyToken}= require('../controllers/user.controller')


// register user
router.post('/register', userController.registerUser)

// login
router.post('/login', userController.loginUser)

//getall
router.get('/all', userController.findAll)

//delete user
router.delete('/delete/:id', userController.destroy)

//get user profile
router.get('/profile', verifyToken, userController.profile )

//getone
// router.get('/:id', userController.findOne)

module.exports = router