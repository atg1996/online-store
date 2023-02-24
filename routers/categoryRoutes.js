const express = require('express')
const router = express.Router();
const controller = require('../controllers/categoryController')


router.route('/').get(controller.dummyFunction)
router.post('/', controller.addCategory)
router.put('/:id', controller.updateCategory)
router.delete('/:id', controller.deleteCategory)

module.exports = router
