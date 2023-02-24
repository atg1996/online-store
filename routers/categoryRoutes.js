const express = require('express')
const router = express.Router();
const controller = require('../controllers/categoryController')

const {sellerChecker} = require('../middlewares/sellerCheck')

router.post('/',sellerChecker, controller.addCategory)
router.put('/:id',sellerChecker, controller.updateCategory)
router.delete('/:id',sellerChecker, controller.deleteCategory)

module.exports = router
