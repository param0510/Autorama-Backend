var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// importing cors
var cors_policy = require('cors');

// Initialize cors policy options
var cors_options = { // whitelist > only one allowed origin can access my data
  origin: 'http://localhost:4200', // frontend URL
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var carsRouter = require('./routes/cars');
var tiresRouter = require('./routes/tires');
var batteriesRouter = require('./routes/batteries');
var accessoriesRouter = require('./routes/accessories');

const mongoose = require('mongoose')
const systemConfig = require('./config/system')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Cors_policy for enabling access to data from this remote backend server 
// enables data to be read from an allowed origin
app.use(cors_policy(cors_options)); 

// Making the db connection
mongoose.connect(systemConfig.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((msg) => {
    console.log('Database Connection Successful!')
  })
  .catch((err) => {
    console.log('Error while connecting to database')
  })

app.use('/', indexRouter);
app.use('/cars', carsRouter);
app.use('/tires', tiresRouter);
app.use('/batteries', batteriesRouter);
app.use('/accessories', accessoriesRouter);
// app.use('/users', usersRouter);

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
