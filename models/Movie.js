module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    'movie',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.STRING,
      },
      rated: {
        type: DataTypes.STRING,
      },
      released: {
        type: DataTypes.STRING,
      },
      runtime: {
        type: DataTypes.STRING,
      },
      genre: {
        type: DataTypes.STRING,
      },
      director: {
        type: DataTypes.STRING,
      },
      writer: {
        type: DataTypes.STRING,
      },
      actors: {
        type: DataTypes.STRING,
      },
      plot: {
        type: DataTypes.TEXT,
      },
      language: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      awards: {
        type: DataTypes.STRING,
      },
      imdbId: {
        type: DataTypes.STRING,
      },
      boxOffice: {
        type: DataTypes.STRING,
      },
      production: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Movie.associate = (models) => {
    Movie.hasOne(models.Review, { as: 'reviews' });
  };
  return Movie;
};
