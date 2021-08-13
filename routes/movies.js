const express = require('express');

const { getAllMovies } = require('../controllers/movies');

const router = express.Router();

router.route('/').get(getAllMovies);

module.exports = router;
