const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
const Review = require('../models/Review');

// add new review to database
exports.addNewReview = async (req, res) => {
  const title = localStorage.getItem('title');
  try {
    let [review, created] = await Review.findOrCreate({
      where: { title },
      defaults: { thumbsUp: 0, thumbsDown: 0 },
    });
    if (req.body.review === 'thumbsUp') review.thumbsUp++;
    if (req.body.review === 'thumbsDown') review.thumbsDown++;
    await review.save();
    res.redirect('back');
  } catch (err) {
    console.error(err);
  }
};
