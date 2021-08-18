const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

const movie = require('./movies');
const Review = require('../models/Review');

// get one movie with review
exports.getMovieReview = async (req, res) => {
  const { imdbID } = req.query;
  const movieData = await movie.getOneMovie(imdbID);
  const reviews = {
    title: movieData.Title,
    director: movieData.Director,
    year: movieData.Year,
    poster: movieData.Poster,
    description: movieData.Plot,
    thumbsUp: 0,
    thumbsDown: 0,
  };
  localStorage.setItem('title', reviews.title);
  try {
    const getReviews = await Review.findOne({
      where: { title: movieData.Title },
    });
    if (movieData && getReviews) {
      reviews.thumbsUp = getReviews.thumbsUp;
      reviews.thumbsDown = getReviews.thumbsDown;
      res.render('reviews', {
        reviews,
      });
    }
    if (movieData && !getReviews) {
      res.render('reviews', {
        reviews,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
