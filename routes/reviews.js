const express = require('express');
const { getAllReviews, addNewReview } = require('../controllers/reviews');

const Review = require('../models/Review');

const router = express.Router();

router.route('/').get(getAllReviews);
router.route('/:id').put(addNewReview);

module.exports = router;
