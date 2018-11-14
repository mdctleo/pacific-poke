var createError = require('http-errors');
var express = require('express');
const mysql = require('mysql');
var Promise = require('promise');
var path = require('path');
var logger = require('morgan');

var pokemonRouter = require('./src/PokemonRouter');
var cors = require('cors');
var corsOptions = {
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pokemonRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
