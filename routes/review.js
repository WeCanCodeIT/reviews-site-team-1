var express = require('express');
var router = express.Router();

const ReviewController = require('../controllers/review');


/* GET Reviews */
router.get('/', ReviewController.getReviews);

// GET New Reviews Page
router.get('/new', ReviewController.getNewReviewForm);

/* POST new Reviews */
router.post('/', ReviewController.newReview);


module.exports = router;
