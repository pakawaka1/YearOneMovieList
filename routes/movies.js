const express = require('express');

const { getAllMovies, getMovie } = require('../controllers/movies');

const Movie = require('../models/Movie');

const router = express.Router();

router.route('/').get(getAllMovies);

router.route('/:id').get(getProgram);

module.exports = router;
