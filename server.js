var express = require('express')
  , methodOverride = require('method-override')
  , errorhandler = require('errorhandler')
  , http    = require('http')
  , path    = require('path')
  , bodyParser = require('body-parser')
  , request = require('request');

// get an instance of express
var app = express();


// Configuration
  app.set('port', process.env.PORT || 3000);
  app.set('view engine', 'jade');
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, 'app')));


// Dev-Specific Configuration
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
  app.use(errorhandler());
}

// Routes
app.get('/', function (req, res) {
  res.send(__dirname + '/app/index.html');
});

app.get('/trackedVenues', function(req,res,next){
  var url = "http://tiny-tiny.herokuapp.com/collections/trackVenues";
  request.get({url: url}, function(err, response) {
    res.send(JSON.parse(response.body));
  })
});

app.get('/searchBands/:artist', function(req,res,next){
  /* concatenate req.params.word into the URL below
  *  to make the URL go to the place it needs to, e.g.,
  *  var url = "http://api.bandsintown.com/artists/" + req.params.word + "/ending_url_stuff"
  */
  var url = "http://api.bandsintown.com/artists/" + req.params.artist + "/events.json?&app_id=findstuff?callback=JSON_CALLBACK";
  request.get({url: url}, function(err, response) {
    res.send(JSON.parse(response.body));
  })
});

app.get('/searchVenues/:venueID', function(req,res,next){
  var url = "http://api.bandsintown.com/venues/" + req.params.venueID + "/events.json?&app_id=findstuff?callback=JSON_CALLBACK";
  request.get({url: url}, function(err, response) {
    res.send(JSON.parse(response.body));
  })
});

// Light It Up!
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
<<<<<<< HEAD


//comment to update
=======
>>>>>>> e1068cf0f8b184b17564dd85a572ee5aa61b8706
