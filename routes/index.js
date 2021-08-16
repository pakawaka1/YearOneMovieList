const express = require('express');

const { getAllMovies } = require('../controllers/movies');
const { getMovieReview } = require('../controllers/reviews');
const { addNewReview } = require('../controllers/add');

const router = express.Router();

router.get('/movies', getAllMovies);
router.get('/movies/id', getMovieReview);
router.post('/movies/id', addNewReview);

module.exports = router;
