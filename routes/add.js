const express = require('express');

const { addNewReview } = require('../controllers/add');

const router = express.Router();

router.route('/').put(addNewReview);

module.exports = router;
