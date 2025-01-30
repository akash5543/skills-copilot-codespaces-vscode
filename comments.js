// create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var comments = require('./comments.json');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// create route to get comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// create route to post comments
app.post('/comments', function(req, res) {
    comments.push(req.body);
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
        console.log(err);
    });
    res.json(comments);
});

// create route to delete comments
app.delete('/comments', function(req, res) {
    comments = [];
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
        console.log(err);
    });
    res.json(comments);
});

// create route to delete comment by id
app.delete('/comments/:id', function(req, res) {
    comments.splice(req.params.id, 1);
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
        console.log(err);
    });
    res.json(comments);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});