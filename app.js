const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Load env vars
dotenv.config({ path: './config/config.env' });

const db = require('./config/database');

//test db
db.authenticate()
  .then(() => console.log('Database connected....'))
  .catch((err) => console.log('Error:' + err));

// initialize express
const app = express();

// Handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }));
app.set('view engine', 'hbs');

// body parser to parse JSON
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

app.use('/movies', require('./routes/movies'));
app.use('/review', require('./routes/reviews'));
app.use('/review/add', require('./routes/add'));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
