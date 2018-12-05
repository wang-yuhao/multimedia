var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var auth = require('./routes/auth');

// ******************************************************
// ***
// TODO: require the shoot module.
var shoot = require('./routes/shoot')
// ***
// ******************************************************

var app = express();

var passport = require('passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret : "superfancysessionsecretSFSS",
  resave: false,
  saveUninitialized: false
}));

// now all parsing middleware is there and we can use more advanced middleware.

// this initializes
app.use(passport.initialize());
app.use(passport.session());


// forwarder if the user is logged in
app.use('/', [express.static(path.join(__dirname, 'public'))]);
app.use('/secret', [auth.ensureAuthenticated, express.static(path.join(__dirname, 'secret'))]);

app.use('/auth', auth);

// ******************************************************
// ***
// TODO: insert add the router of the shoot module (just like auth).

var urlJson={
  "status": "ok",
  "message": "re-used screenshot",
  "path": "/shoot/screenshots/testde.png",
  "responseTime": 0,
 };
app.use('/shoot',shoot);
app.post('/shoot/screenshots/create',function(req,res){
  res.send(JSON.stringify(urlJson));
  console.log("!!");
})
// ***
// ******************************************************


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// app.listen(3000, function() {   //监听http://127.0.0.1:3000端口
//   console.log("server start");
// });

module.exports = app;
