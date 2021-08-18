const Sequelize = require('sequelize');
const db = require('../config/db');

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
  },
  thumbsUp: {
    type: Sequelize.INTEGER,
  },
  thumbsDown: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Review;
