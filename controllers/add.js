const Review = require('../models/Review');
const asyncHandler = require('../middleware/async');

// add new review to database
exports.addNewReview = asyncHandler(async (req, res) => {
  const title = Object.keys(req.body).toString();
  const [review, created] = await Review.findOrCreate({
    where: { title },
    defaults: { thumbsUp: 0, thumbsDown: 0 },
  });
  if (req.body[title] === 'thumbsUp') review.thumbsUp++;
  if (req.body[title] === 'thumbsDown') review.thumbsDown++;
  await review.save();
  res.status(200).redirect('back');
});
