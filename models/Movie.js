modules.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('movie', {
        title: {
            DataTypes.STRING,
            allowNull: false, 
        },
        year: {
            DataTypes.STRING;
        },
        rated: {
            DataTypes.STRING;
        },
        released: {
            DataTypes.STRING;
        },
        runtime: {
            DataTypes.STRING;
        },
        genre: {
            DataTypes.STRING;
        },
        director: {
            DataTypes.STRING;
        },
        writer: {
            DataTypes.STRING;
        },
        actors: {
            DataTypes.STRING;
        },
        plot: {
            DataTypes.TEXT;
        },
        language: {
            DataTypes.STRING;
        },
        country: {
            DataTypes.STRING;
        }, 
        awards: {
            DataTypes.STRING;
        },
        imdbId: {
            DataTypes.STRING;
        },
        boxOffice: {
            DataTypes.STRING;
        },
        production: {
            DataTypes.STRING;
        }
    }, {});
    Movie.associate = (models) => {
        Movie.hasOne(models.Review, {as: 'reviews'})
    };
    return Movie;
}