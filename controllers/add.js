const Review = require('../models/Review');
const asyncHandler = require('../middleware/async');

// add new review to database
exports.addNewReview = asyncHandler(async (req, res, next) => {
  const title = Object.keys(req.body).toString();
  const [review, created] = await Review.findOrCreate({
    where: { title },
    defaults: { thumbsUp: 0, thumbsDown: 0 },
  });
  /// update error handling here
  // if (!req.body[title]) {
  //   return next(

  //   )
  // }

  //////////////////////

  if (req.body[title] === 'thumbsUp') review.thumbsUp++;
  if (req.body[title] === 'thumbsDown') review.thumbsDown++;
  await review.save();
  res.redirect('back');
});
