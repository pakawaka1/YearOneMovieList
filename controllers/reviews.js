const { LocalStorage } = require('node-localstorage');
var localStorage = new LocalStorage('./scratch');

const movie = require('./movies');
const Review = require('../models/Review');

// get one movie with review
exports.getMovieReview = async (req, res) => {
  let { imdbID } = req.query;
  const movieData = await movie.getOneMovie(imdbID);
  let description = movieData.Plot;
  const endIndex = description.lastIndexOf('.');
  description = description.substring(0, endIndex + 1);
  let reviews = {
    title: movieData.Title,
    director: movieData.Director,
    year: movieData.Year,
    poster: movieData.Poster,
    description,
    thumbsUp: null,
    thumbsdDown: null,
  };
  try {
    const getReviews = await Review.findOne({
      where: { title: movieData.Title },
    });
    localStorage.setItem('title', reviews.title);
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

// add movie review

// Redoooooooo////////////////////////////////////////////////////////////////////////////////////
exports.addNewReview = async (req, res) => {
  const title = sessionStorage.getItem('title');
  console.log(title);

  try {
    //   const [review, created] = await Review.findOrCreate({
    //     where: { title: movieData.Title },
    //     defaults: { thumbsUp: 0, thumbsDown: 0 },
    //   });
    //   if (req.body.thumbsUp !== undefined) review.thumbsUp++;
    //   if (req.body.thumbsDown !== undefined) review.thumbsDown++;
    //   await review.save();
    //   res.render('movieInfo', {
    //     title: movieData.Title,
    //     director: movieData.Director,
    //     year: movieData.Year,
    //     description: movieData.Plot,
    //     thumbsUp: review.thumbsUp,
    //     thumbsDown: review.thumbsDown,
    //   });
  } catch (err) {
    console.error(err);
  } finally {
    res.redirect('/reviews');
  }
};
