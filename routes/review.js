var express = require('express');
var router = express.Router();

const ReviewController = require('../controllers/review');


/* GET Reviews */
router.get('/', ReviewController.getReviews);

// /* GET Reviews */
router.post('/', ReviewController.newReview);






module.exports = router;