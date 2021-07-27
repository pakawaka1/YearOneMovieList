const axios = require('axios');

exports.getAllMovies = async () => {
  try {
    const response = await axios.get(
      'https://movie-database-imdb-alternative.p.rapidapi.com/',
      {
        params: { i: 'tt4154796', r: 'json' },
        headers: {
          'x-rapidapi-key': process.env.RAPIDAPI_KEY,
          'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
        },
      }
    );
  } catch (err) {
    console.error(err);
  }
};
