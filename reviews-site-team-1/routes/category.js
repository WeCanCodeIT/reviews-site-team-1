var express = require('express');
var router = express.Router();

const category = require('../controllers/category');


/* GET Category */
router.get('/', category.trial);

module.exports = router;
