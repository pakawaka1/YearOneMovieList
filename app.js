const express = require('express');
const dotenv = require('dotenv');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Load env vars
dotenv.config({ path: './config/config.env' });

// initialize express
const app = express();

// db sync and connect
const db = require('./config/db');

db.authenticate().then(() => {
  console.log('Drop and re-sync db.');
});

const hbs = exphbs.create({
  helpers: {
    if_eq: function (a, b, opts) {
      console.log(a);
      console.log(b);
      if (a !== b) {
        console.log('yes');
        return opts.fn(this);
      } else {
        console.log('no');
        return opts.inverse(this);
      }
    },
  },
  defaultLayout: 'main',
  extname: 'hbs',
});

// Handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// body parser to parse JSON
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folders
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('views/images'));

// set routes
app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
