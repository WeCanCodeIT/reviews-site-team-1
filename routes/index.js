var express = require('express');
var router = express.Router();
const IndexController = require("../controllers/index");

/* GET home page. */
router.get('/', IndexController.index);

// POST Request//
router.post('/', IndexController.addReview);

module.exports = router;
