const express = require('express')
const router = express.Router();
const controller = require('../controllers/itemController')

router.route('/').get(controller.dummyFunction)

module.exports = router
