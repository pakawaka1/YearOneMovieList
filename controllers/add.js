const movie = require('./movies');
const Review = require('../models/Review');

// add new review to database
exports.addNewReview = async (req, res) => {
  try {
    const { imdbID } = req.query;
    const movieData = await movie.getOneMovie(imdbID);
    const [review, created] = await Review.findOrCreate({
      where: { title: movieData.Title },
      defaults: { thumbsUp: 0, thumbsDown: 0 },
    });
    if (req.body.review === 'thumbsUp') review.thumbsUp++;
    if (req.body.review === 'thumbsDown') review.thumbsDown++;
    await review.save();
    res.redirect('back');
  } catch (err) {
    console.error(err);
  }
};
