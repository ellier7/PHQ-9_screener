var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));


// webpack loads index.html, looks for script src
app.get('/public/bundle.js', function(req, res){
  res.sendFile(path.join(__dirname, '../client/public/bundle.js'));
});

app.get('/styles/style.css', function(req, res){
  res.sendFile(path.join(__dirname, '../client/styles/style.css'));
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, function(){
	console.log('Listening on port ' + port);
});