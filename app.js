
var express = require('express')
  , routes = require('./routes')
  , projects = require('./routes/projects')
  , blog = require('./routes/blog')
  , http = require('http')
  , path = require('path');

var app = express();

app.engine('.html', require('ejs').__express);

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

/*
* Routes
*/
app.get('/', routes.index);
app.get('/projects', projects.index);
app.get('/blog', blog.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
