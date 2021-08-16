const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

const Review = require('../models/Review');
// Redoooooooo////////////////////////////////////////////////////////////////////////////////////
exports.addNewReview = async (req, res) => {
  const title = localStorage.getItem('title');
  const checkReview = localStorage.getItem('ifReview');
  try {
    const [review, created] = await Review.findOrCreate({
      where: { title },
      // defaults: { thumbsUp: 0, thumbsDown: 0 },
    });
    if (checkReview !== true) {
      if (req.body.review.thumbsUp !== undefined) review.thumbsUp++;
      if (req.body.review.thumbsDown !== undefined) review.thumbsDown++;
      await review.save();
      localStorage.setItem('ifReview', true);
      res.render('reviews', {
        thumbsUp: review.thumbsUp,
        thumbsDown: review.thumbsDown,
      });
    }
  } catch (err) {
    console.error(err);
    //   } finally {
    //     res.redirect('/reviews');
  }
};
