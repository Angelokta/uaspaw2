require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const connectDB = require("./app_api/models/db");
connectDB(); // connect to mongoDB
var cors = require('cors');

// route app_api
const novelRouterAPI = require("./app_api/routes/novel");
const penulisRouterAPI = require("./app_api/routes/penulis");
const penerbitRouterAPI = require("./app_api/routes/penerbit");
const authRouterApi = require("./app_api/routes/auth");

// ensure critical env vars exist
if (!process.env.JWT_SECRET) {
  console.error('Missing JWT_SECRET in environment. Set JWT_SECRET in .env or environment variables.');
  process.exit(1);
}

// route app_server
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// server routes
app.use('/', indexRouter);
// app.use('/users', usersRouter);

// API routes
app.use('/api/novel', novelRouterAPI);
app.use('/api/penulis', penulisRouterAPI);
app.use('/api/penerbit', penerbitRouterAPI);
app.use('/api/auth', authRouterApi);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
