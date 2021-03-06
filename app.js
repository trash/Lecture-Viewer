
/**
 * Module dependencies.
 */

//This is a very basic node server meant to server index.html and resources and little else

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/app');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
});

app.engine('html', require('ejs').renderFile);

app.configure('development', function(){
  // Configuration for development environments.
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use('/app', express.static(__dirname + '/app'));
  app.use(express.static(path.join(__dirname, '/app')));
  app.use(express.logger('dev'));
  app.use(express.errorHandler({ dumpExceptions : true,
                                 showStack: true }));
});

app.configure('production', function(){
  // Configuration for production environments.
  var RedisStore = require('connect-redis')(express);
  var sessionStore = new RedisStore();
  app.use(express.cookieParser('your secret here'));
  app.use(express.session({
    secret: 'LectureViewer',
    store : sessionStore,
    key   : 'lectureview.sid'
  }));
  app.use(app.router);
  app.use('/app', express.static(__dirname + '/app'));
  app.use(express.static(path.join(__dirname, '/app')));
  app.use(express.logger('default'));
  app.use(express.errorHandler());
});

app.get('/', function(req, res){
  res.render('index.html', { title: 'Express' });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
