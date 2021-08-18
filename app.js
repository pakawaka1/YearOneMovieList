const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// initialize express
const app = express();

// Handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

// body parser to parse JSON
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//sync and connect to DB
db.sync().then(() => {
  console.log('Drop and re-sync db.');
});

app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
