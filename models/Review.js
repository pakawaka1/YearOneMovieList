module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    'review',
    {
      thumbsUp: {
        type: DataTypes.REAL,
      },
      thumbsDown: {
        type: DataTypes.REAL,
      },
    },
    {}
  );
  Review.associate = (models) => {
    Review.belongsTo(models.Movie, { foreignKey: 'imdbId', as: 'movie' });
  };
  return Review;
};
