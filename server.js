const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Route Files
const movies = require('./routes/movies');
const reviews = require('./routes/reviews');

//connect to DB
const db = require('./config/database');
db.authenticate();
try {
  console.log('Database is connected...');
} catch (err) {
  console.log('Error: ' + err);
}

// initialize express
const app = express();

// // Handlebars
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// // Parse incomings data requestions
// app.use(bodyParser.urlencoded({ extended: false }));

// // set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// // set index to landing
// app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

// routes
app.use('/', movies);
app.use('/reviews', reviews);

// port settings.
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
