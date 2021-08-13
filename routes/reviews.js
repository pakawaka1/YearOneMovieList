const express = require('express');
const { getMovieReview, addNewReview } = require('../controllers/reviews');
const Review = require('../models/Review');

const router = express.Router();

router.route('/').get(getMovieReview);
router.route('/add').put(addNewReview);

module.exports = router;
