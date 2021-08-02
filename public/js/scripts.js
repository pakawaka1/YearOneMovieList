const movie = require('../../controllers/movies');
const review = require('../../controllers/reviews');

const input = document.querySelector('input');
const button = document.querySelector('button');

const showAllMovies = () => {
  // debounce here.......
  //bring movie.getAllMovies(input.value);
};

const showOneMovie = () => {
  //async all this...
  //   review.getMovieReview(input.value);
};

input.addEventListener('keyup', showAllMovies, false);
button.addEventListener('click', showOneMovie, false);
