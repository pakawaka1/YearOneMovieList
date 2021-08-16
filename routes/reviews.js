const express = require('express');

const { getMovieReview } = require('../controllers/reviews');

const router = express.Router();

router.route('/').get(getMovieReview);

module.exports = router;
