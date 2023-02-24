const express = require('express')
const router = express.Router();
const controller = require('../controllers/itemController')


router.route('/').get(controller.dummyFunction)

router.post('/', controller.addItem)
router.put('/:id', controller.updateItem)
router.delete('/:id', controller.deleteItem)
router.get('/getItems/:category', controller.getItemsByCategory)
router.get('/search', controller.searchItems)

module.exports = router
