const express = require('express')
const router = express.Router();
const controller = require('../controllers/itemController')
const {sellerChecker} = require('../middlewares/sellerCheck')
const {tokenCheck} = require('../middlewares/auth')


router.post('/',sellerChecker, controller.addItem)
router.put('/:id',sellerChecker, controller.updateItem)
router.delete('/:id',sellerChecker, controller.deleteItem)
router.get('/getItems/:category',tokenCheck, controller.getItemsByCategory)
router.get('/search',tokenCheck, controller.searchItems)

module.exports = router
