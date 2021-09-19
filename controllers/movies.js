const axios = require('axios');
const asyncHandler = require('../middleware/async');
const URL = 'https://movie-database-imdb-alternative.p.rapidapi.com/';
const HEADERS = {
  'x-rapidapi-key': process.env.RAPIDAPI_KEY,
  'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
};

// get all movies in search
exports.getAllMovies = asyncHandler(async (req, res, next) => {
  const { title } = req.query;
  let movies = await axios.get(URL, {
    params: { s: title },
    headers: HEADERS,
  });
  movies = movies.data.Search;
  if (!movies) {
    // /////////////////////find way to redirect to URL/////////////////////////////////////////////////////////////////////
    return next(
      res.status(404).json({
        success: false,
        message: `Movie with name '${req.query.title}' not found.`,
      })
    );
  }
  movies = movies.filter((movie) => movie.Poster !== 'N/A');
  res.render('movies', {
    movies,
  });
});

// get one movie using IMDB ID
exports.getOneMovie = asyncHandler(async (id, req, next) => {
  const titleResponse = await axios.get(URL, {
    params: { i: id },
    headers: HEADERS,
  });
  if (!titleResponse) {
    return next(
      res.status(404).json({
        success: false,
        message: `Movie with ID of '${req.params.id}' not found.`,
      })
    );
  }
  return titleResponse.data;
});
