// create web server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create a variable to store comments
var comments = [
  { name: 'John', message: 'Hello' },
  { name: 'Jane', message: 'Hi' }
];

// create a route to get comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// create a route to post comments
app.post('/comments', function(req, res) {
  var comment = req.body;
  comments.push(comment);
  res.json(comments);
});

// create a route to delete comments
app.delete('/comments/:index', function(req, res) {
  var index = req.params.index;
  comments.splice(index, 1);
  res.json(comments);
});

// listen to port 3000
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});