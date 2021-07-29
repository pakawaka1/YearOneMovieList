const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const axios = require('axios');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Route Files
const movies = require('./routes/movies');
const reviews = require('./routes/reviews');

const app = express();

const corsOptions = {
  origin: 'http://localhost:5001',
};

app.use(cors(corsOptions));

// Parse incomings data requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Db Models
const db = require('./models');
db.sequelize.sync();

app.use('/api/v1/movies', movies);
app.use('/api/v1/reviews', reviews);

// port settings.
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
