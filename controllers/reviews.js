const movie = require('./movies');
const db = require('../models');
// const Movie = db.movies;
const Review = db.reviews;

exports.getAllReviews = async (req, res) => {
  const data = await movie.getOneMovie();
  const review = await Review.findByPk(data.imdbID);

  // working on creating reviews;
  if (!review) {
    return res.status(404).json({
      success: false,
      msg: `Review not found with id of ${data.imdbID}`,
    });
  }
  res.status(200).json({ success: true, data: review });
};
