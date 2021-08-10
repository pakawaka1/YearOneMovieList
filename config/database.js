const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('movieDB', 'postgres', process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: 0,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const db = {};

db.sequelize = sequelize;
db.DataTypes = DataTypes;

db.reviews = require('../models/Review')(sequelize, DataTypes);

module.exports = db;
