// const movie = require('../../controllers/movies');
// const review = require('../../controllers/reviews');

const input = document.querySelector('input');
const getMovieButton = document.getElementById('getMovieButton');
// const reviewMovieButton = document.getElementById('reviewMovieButton');

const showAllMovies = () => {
  // debounce here.......
  //bring movie.getAllMovies(input.value);
};

const showOneMovie = () => {
  //async all this...
  //   review.getMovieReview(input.value);
};

input.addEventListener('keyup', showAllMovies, false);
getMovieButton.addEventListener('click', showOneMovie, false);
// getMovieButton.addEventListener('click', showOneMovie, false);
