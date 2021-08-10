const movie = require('./movies');
const db = require('../config/database');
const Review = db.reviews;

exports.getMovieReview = async (req, res, next) => {
  let { title } = req.query;
  const movieData = await movie.getOneMovie(title);
  try {
    const review = await Review.findOne({
      where: { title: movieData.Title },
    });
    if (movieData && review) {
      res.render('movieInfo', {
        title: movieData.Title,
        director: movieData.Director,
        year: movieData.Year,
        description: movieData.Plot,
        thumbsUp: review.thumbsUp,
        thumbsDown: review.thumbsDown,
      });
    }

    if (movieData && !review) {
      res.render('movieInfo', {
        title: movieData.Title,
        director: movieData.Director,
        year: movieData.Year,
        description: movieData.Plot,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
exports.addNewReview = async (req, res) => {
  const movieData = await movie.getOneMovie();
  try {
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
  } catch (err) {
    console.error(err);
  }
};

// exports.addNewReview = async (req, res) => {
//   const movieData = await movie.getOneMovie();
//   try {
//     const [review, created] = await Review.findOrCreate({
//       where: { title: movieData.Title },
//       defaults: { thumbsUp: 0, thumbsDown: 0 },
//     });
//     if (req.body.thumbsUp !== undefined) review.thumbsUp++;
//     if (req.body.thumbsDown !== undefined) review.thumbsDown++;
//     await review.save();
//     res.render('movieInfo', {
//       title: movieData.Title,
//       director: movieData.Director,
//       year: movieData.Year,
//       description: movieData.Plot,
//       thumbsUp: review.thumbsUp,
//       thumbsDown: review.thumbsDown,
//     });
//   } catch (err) {
//     console.error(err);
//   } finally {
//     res.redirect('/reviews');
//   }
// };
