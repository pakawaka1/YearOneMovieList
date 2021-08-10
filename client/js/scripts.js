const movie = require('../../controllers/movies');
const review = require('../../controllers/reviews');

const input = document.querySelector('input');
const getMovieButton = document.getElementById('getMovieButton');
// const reviewMovieButton = document.getElementById('reviewMovieButton');

const showAllMovies = () => {
  // debounce here.......
  //bring movie.getAllMovies(input.value);
};

const showOneMovie = async () => {
  const movie = await review.getMovieReview(input.value);
  if (!movie) return alert(`There is no movie with the title ${input.value}`);
};

input.addEventListener('keyup', showAllMovies, false);
getMovieButton.addEventListener('click', showOneMovie, false);
// getMovieButton.addEventListener('click', showOneMovie, false);
