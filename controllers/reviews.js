const movie = require('./movies');
const db = require('../models');
const Review = db.reviews;

exports.getMovieReview = async (res) => {
  const movieData = await movie.getOneMovie();
  const review = await Review.findOne({
    where: { title: movieData.Title },
  });
  return res.status(200).json({ success: true, data: movieData, review });
};

exports.addNewReview = async (req, res) => {
  const movieData = await movie.getOneMovie();
  const [review, created] = await Review.findOrCreate({
    where: { title: movieData.Title },
    defaults: { thumbsUp: 0, thumbsDown: 0 },
  });
  if (req.body.thumbsUp !== undefined) review.thumbsUp++;
  if (req.body.thumbsDown !== undefined) review.thumbsDown++;
  await review.save();
  return res.status(200).json({
    success: true,
    msg: `Thank you for adding your review to the movie called ${review.title}`,
    data: movieData,
    review,
  });
};
