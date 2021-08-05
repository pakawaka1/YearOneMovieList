const axios = require('axios');
const URL = 'https://movie-database-imdb-alternative.p.rapidapi.com/';
const HEADERS = {
  'x-rapidapi-key': process.env.RAPIDAPI_KEY,
  'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
};

// TO BE ADDED LATER /////////////////////////////////////////////////////
// exports.getAllMovies = async (searchItem) => {
//   try {
//     const searchResponse = await axios.get(URL, {
//       params: { s: searchItem },
//       headers: HEADERS,
//     });
//     return searchResponse.data;
//   } catch (err) {
//     console.error(err);
//   }
// };////////////////////////////////////////////////////////////////////////////////

exports.getOneMovie = async (title) => {
  const updatedTitle = title.replace(/\b\w/g, (c) => c.toUpperCase());
  console.log(updatedTitle);
  try {
    const titleResponse = await axios.get(URL, {
      params: { t: updatedTitle },
      headers: HEADERS,
    });
    return titleResponse.data;
  } catch (err) {
    console.error(err);
  }
};
