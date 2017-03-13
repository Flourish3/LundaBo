// modules =================================================
var express        = require('express');
var path           = require('path');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
app.disable('x-powered-by');
// config files
var db = require('./config/db.js');

var port = process.env.PORT || 8080; // set our port

mongoose.Promise = global.Promise;
var promise = mongoose.connect(db.url, function(err,db){
  if(err){
    console.log(err.stack);
  } else {
    console.log("Connection established");
  }
}); // connect to our mongoDB database (commented out after you enter in your own credentials)
    /*.then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err)); */

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

var credentials = require('./credentials.js');
app.use(require('cookie-parser')(credentials.cookieSecret));

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes
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
  res.status(err.status >= 100 && err.status < 600 ? err.code : 500);
  res.redirect(err.status,'/error');
});

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app