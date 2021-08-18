const axios = require('axios');
const URL = 'https://movie-database-imdb-alternative.p.rapidapi.com/';
const HEADERS = {
  'x-rapidapi-key': process.env.RAPIDAPI_KEY,
  'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
};

// get all movies from API by title
exports.getAllMovies = async (req, res) => {
  const { title } = req.query;
  try {
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
  } catch (err) {
    console.error(err);
  }
};

// get one movie using IMDB ID
exports.getOneMovie = async (id) => {
  try {
    const titleResponse = await axios.get(URL, {
      params: { i: id },
      headers: HEADERS,
    });
    return titleResponse.data;
  } catch (err) {
    console.error(err);
  }
};
