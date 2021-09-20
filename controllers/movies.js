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
    return next(res.status(404).redirect('back'));
  }
  res.status(200).render('movies', {
    movies,
  });
});

// get one movie using IMDB ID
exports.getOneMovie = asyncHandler(async (id, req) => {
  const titleResponse = await axios.get(URL, {
    params: { i: id },
    headers: HEADERS,
  });
  return titleResponse.data;
});
