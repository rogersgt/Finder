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
app.get('/', express.static(path.join(__dirname, 'app')));

app.get('/findShows', function(req,res,next){
  var url = "http://api.bandsintown.com/artists/Dempsey/events.json?app_id=findstuff?callback=JSON_CALLBACK";
  request.get({url: url}, function(err, response) {
    res.send(JSON.parse(response.body));
  })
});

// Light It Up!
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
