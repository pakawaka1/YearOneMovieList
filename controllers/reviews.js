const movie = require('./movies');
const db = require('../models');
const Review = db.reviews;

exports.getAllReviews = async (req, res) => {
  const movieData = await movie.getOneMovie();
  const review = await Review.findOrCreate({
    where: { title: movieData.Title },
    defaults: { thumbsUp: 0, thumbsDown: 0 },
  });
  res.status(200).json({ success: true, data: review });
};

exports.addNewReview = async (req, res) => {
  // let review = await Review.findByPk(req.params.id);
  // review = await Review.update(
  //   { thumbsUp: req.body.thumbsUp } || { thumbsDown: req.body.thumbsDown },
  //   { returning: true, where: { title: req.body.title } }
  // );
  // res
  //   .status(200)
  //   .json({
  //     success: true,
  //     msg: `Thank you for adding your review to the movie ${req.body.title}`,
  //     data: review,
  //   });
};
