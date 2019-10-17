var express = require('express');
var router = express.Router();

const CategoryController = require('../controllers/category');

/* GET Category */
router.get('/', CategoryController.renderAll);

router.get("/:id", CategoryController.reviewCategory);

module.exports = router;
