const express = require('express');

const { getAllMovies, getOneMovie } = require('../controllers/movies');

const router = express.Router();

router.route('/').get(getAllMovies);

router.route('/movie').get(getOneMovie);

module.exports = router;
