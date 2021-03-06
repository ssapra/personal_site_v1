var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
// var serveStatic = require('serve-static');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var compression = require('compression');

var index = require('./routes/index');
var new_items = require('./routes/new_items');
var items = require('./routes/items');
var experience = require('./routes/experience');
var play = require('./routes/play');


var app = express();
app.use(compression());
// app.use(serveStatic(path.join(__dirname, 'public'), {
//   maxAge: '1w'
// }))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/experience', experience);
app.use('/new', new_items);
app.use('/items', items);
app.use('/play', play);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
