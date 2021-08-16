const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

const movie = require('./movies');
const Review = require('../models/Review');

// get one movie with review
exports.getMovieReview = async (req, res) => {
  let { imdbID } = req.query;
  const movieData = await movie.getOneMovie(imdbID);
  let reviews = {
    title: movieData.Title,
    director: movieData.Director,
    year: movieData.Year,
    poster: movieData.Poster,
    description: movieData.Plot,
    thumbsUp: null,
    thumbsdDown: null,
  };
  localStorage.setItem('title', reviews.title);
  localStorage.setItem('ifReview', false);
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
      reviews.thumbsUp = 'Not yet added...';
      reviews.thumbsDown = 'None yet added...';
      res.render('reviews', {
        reviews,
      });
    }
  } catch (err) {
    console.error(err);
  }
};
