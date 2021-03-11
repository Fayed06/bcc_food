const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const jwtmiddlewares= require('../middlewares/jwtAuth')
const joiMiddleware = require("../middlewares/joiValidator")


// register user
router.post('/register', joiMiddleware,userController.registerUser)

// login
router.post('/login', userController.loginUser)

//getall
router.get('/all', userController.findAll)

//delete user
router.delete('/delete/:id', userController.destroy)

//get user profile
router.get('/profile', jwtmiddlewares, userController.profile )



module.exports = router