const express = require('express');
const { getAllReviews, createReview } = require('../controllers/reviews');

const Review = require('../models/Review');

const router = express.Router();

// router.route('/movies/').get(getAllReviews).post(createReview);
router.route('/').get(getAllReviews);

module.exports = router;
