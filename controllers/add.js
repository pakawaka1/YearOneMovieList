const movie = require('./movies');
const Review = require('../models/Review');

// add new review to database
exports.addNewReview = async (req, res) => {
  try {
    const title = Object.keys(req.body).toString();
    const [review, created] = await Review.findOrCreate({
      where: { title },
      defaults: { thumbsUp: 0, thumbsDown: 0 },
    });
    if (req.body[title] === 'thumbsUp') review.thumbsUp++;
    if (req.body[title] === 'thumbsDown') review.thumbsDown++;
    await review.save();
    res.redirect('back');
  } catch (err) {
    console.error(err);
  }
};
