const axios = require('axios');
const asyncHandler = require('../middleware/async');
const URL = 'https://movie-database-imdb-alternative.p.rapidapi.com/';
const HEADERS = {
  'x-rapidapi-key': process.env.RAPIDAPI_KEY,
  'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
};

//async wrapper added
exports.getAllMovies = asyncHandler(async (req, res) => {
  const { title } = req.query;
  let movies = await axios.get(URL, {
    params: { s: title },
    headers: HEADERS,
  });
  movies = movies.data.Search;
  ///update error handling here////////////////////////////////////
  console.log(movies);
  // if (!movies) {
  //   return next(
  //     new ErrorResponse(`Movie not found with name of ${req.}`, 404)
  //   );
  // }
  ////////////////////////////////////////end of error handlling
  movies = movies.filter((movie) => movie.Poster !== 'N/A');
  res.render('movies', {
    movies,
  });
});

// get one movie using IMDB ID
exports.getOneMovie = asyncHandler(async (id, req) => {
  const titleResponse = await axios.get(URL, {
    params: { i: id },
    headers: HEADERS,
  });
  // insert error handling here//////
  console.log(titleResponse);
  // if (!titleResponse) {
  //   return next(
  //     new ErrorResponse(`Movie not found with ID of ${req.params.id}.`, 404)
  //   );
  // }
  ////////////////////////////////////////////////////////////////////////////////
  return titleResponse.data;
});
