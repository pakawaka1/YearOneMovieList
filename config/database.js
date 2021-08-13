const Sequelize = require('sequelize');
const db = new Sequelize('movieDB', 'postgres', process.env.PASSWORD, {
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

module.exports = db;
