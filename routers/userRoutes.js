const express = require('express')
const router = express.Router();
const controller = require('../controllers/userController')

router.post('/userSignUp', controller.signUpUser)
router.post('/userLogin', controller.loginUser)

module.exports = router
