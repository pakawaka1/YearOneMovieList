const axios = require('axios');
const URL = 'https://movie-database-imdb-alternative.p.rapidapi.com/';
const HEADERS = {
  'x-rapidapi-key': process.env.RAPIDAPI_KEY,
  'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
};

exports.getAllMovies = async (req, res) => {
  let { title } = req.query;
  try {
    let movies = await axios.get(URL, {
      params: { s: title },
      headers: HEADERS,
    });
    if (movies) {
      movies = movies.data.Search;
      movies = movies.filter((movie) => movie.Poster !== 'N/A');
      if (movies.Poster !== 'N/A') {
        res.render('movies', {
          movies,
        });
      }
    }
  } catch (err) {
    console.error(err);
  }
};

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
