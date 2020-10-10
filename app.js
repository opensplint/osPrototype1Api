var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var sqliteUsersRouter = require('./routes/sqlite_users');
var cloudantUsersRouter = require('./routes/cloudant_users');

// const expressSession = require('express-session');
// const passport = require('passport');
// const APIStrategy = require('ibmcloud-appid').APIStrategy;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* authentication with ibm app id start */

// app.use(expressSession({
//   secret: '',
//   resave: true,
//   saveUninitialized: true
// }));

// app.use(passport.initialize());
// //app.use(passport.session());
// passport.serializeUser((user, cb) => cb(null, user));
// passport.deserializeUser((user, cb) => cb(null, user));

// passport.use(new APIStrategy({
//   tenantId: process.env.CLOUDANT_APPID_TENENTID,
//   clientId: process.env.CLOUDANT_APPID_CLIENTID,
//   secret: process.env.CLOUDANT_APPID_SECRET,
//   oAuthServerUrl: process.env.CLOUDANT_APPID_OAUTHSERVERURL
//   //redirectUrl: process.env.CLOUDANT_APPID_REDIRECTURL
// }));

// app.use(passport.authenticate(APIStrategy.STRATEGY_NAME, {
//   session: false
// }));

/* authentication with ibm app id end */

app.use('/', indexRouter);
app.use('/sqlite_users', sqliteUsersRouter);
app.use('/cloudant_users', cloudantUsersRouter);

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
