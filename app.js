require('dotenv').config();

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var config = require('./config');
var routes = require('./routes/routes');

var app = express();

// view engine setup
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// favicon setup
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// bodyparser setup
app.use(bodyParser.json( { limit: 1024102420 } ));
app.use(bodyParser.urlencoded({ limit: 1024102420, extended: true, parameterLimit: 1024102420 }));

// environment setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'controllers')));

// routes setup
app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// application error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.DEV ? err : {};

  var context = {
    route: config.routes['error']
  }

  // render the error page
  res.status(err.status || 500);
  res.render('error', context);
});

module.exports = app;
