const express = require('express');

const { getAllMovies, getOneMovie } = require('../controllers/movies');

const router = express.Router();

// TO BE ADDED LATER AS AN ENHANCEMENT
// router.route('/').get(getAllMovies);

router.route('/').get(getOneMovie);

module.exports = router;
