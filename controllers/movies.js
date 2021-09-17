const axios = require('axios');
const asyncHandler = require('../middleware/async');
const URL = 'https://movie-database-imdb-alternative.p.rapidapi.com/';
const HEADERS = {
  'x-rapidapi-key': process.env.RAPIDAPI_KEY,
  'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
};

// get all movies from API by title

//async wrapper added

exports.getAllMovies = asyncHandler(async (req, res) => {
  const { title } = req.query;
  let movies = await axios.get(URL, {
    params: { s: title },
    headers: HEADERS,
  });
  movies = movies.data.Search;
  if (movies !== undefined) {
    movies = movies.filter((movie) => movie.Poster !== 'N/A');
    res.render('movies', {
      movies,
    });
  }
  if (movies === undefined) {
    res.render('movies', {
      title,
    });
  }
});

// get one movie using IMDB ID
exports.getOneMovie = asyncHandler(async (id, req) => {
  const titleResponse = await axios.get(URL, {
    params: { i: id },
    headers: HEADERS,
  });
  return titleResponse.data;
  // } catch (err) {
  //   console.error(err);
  // }
});
