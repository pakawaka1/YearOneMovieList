const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

const Review = require('../models/Review');
// Redoooooooo////////////////////////////////////////////////////////////////////////////////////
exports.addNewReview = async (req, res) => {
  console.log('yolo');

  // const title = sessionStorage.getItem('title');

  try {
    const [review, created] = await Review.findOrCreate({
      where: { title: movieData.Title },
      defaults: { thumbsUp: 0, thumbsDown: 0 },
    });
    if (req.body.thumbsUp !== undefined) review.thumbsUp++;
    if (req.body.thumbsDown !== undefined) review.thumbsDown++;
    await review.save();
    res.render('movieInfo', {
      title: movieData.Title,
      director: movieData.Director,
      year: movieData.Year,
      description: movieData.Plot,
      thumbsUp: review.thumbsUp,
      thumbsDown: review.thumbsDown,
    });
  } catch (err) {
    console.error(err);
  } finally {
    res.redirect('/reviews');
  }
};
