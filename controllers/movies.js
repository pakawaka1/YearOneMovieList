const axios = require('axios');
const URL = 'https://movie-database-imdb-alternative.p.rapidapi.com/';
const HEADERS = {
  'x-rapidapi-key': process.env.RAPIDAPI_KEY,
  'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
};

exports.getAllMovies = async (searchItem) => {
  searchItem = 'hero';
  /// check if passing searchItem as a parameter
  try {
    const searchResponse = await axios.get(URL, {
      params: { s: searchItem, r: 'json' },
      headers: HEADERS,
    });
    console.log(searchResponse.data);
  } catch (err) {
    console.error(err);
  }
};

exports.getOneMovie = async (id) => {
  // check if passing id as a parameter
  id = 'tt4154798';
  try {
    const idResponse = await axios.get(URL, {
      params: { i: id, r: 'json' },
      headers: HEADERS,
    });
    return idResponse.data;
  } catch (err) {
    console.error(err);
  }
};
