module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('review', {
    title: {
      type: DataTypes.STRING,
      required: true,
    },
    thumbsUp: {
      type: DataTypes.INTEGER,
    },
    thumbsDown: {
      type: DataTypes.INTEGER,
    },
  });
  return Review;
};
