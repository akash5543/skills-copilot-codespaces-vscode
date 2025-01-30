// Create web server
// 1. Create a web server
// 2. Create a route for "/comment"
// 3. Create a route for "/comment/new"
// 4. Create a route for "/comment/:id"
// 5. Create a route for "/comment/:id/edit"
// 6. Create a route for "/comment/:id/delete"

// 1. Create a web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

// 2. Create a route for "/comment"
app.get('/comment', (req, res) => {
    res.send('This is a comment');
});

// 3. Create a route for "/comment/new"
app.get('/comment/new', (req, res) => {
    res.send('This is a new comment');
});

// 4. Create a route for "/comment/:id"
app.get('/comment/:id', (req, res) => {
    res.send(`This is a comment with id ${req.params.id}`);
});

// 5. Create a route for "/comment/:id/edit"
app.get('/comment/:id/edit', (req, res) => {
    res.send(`This is an edit page for comment with id ${req.params.id}`);
});

// 6. Create a route for "/comment/:id/delete"
app.get('/comment/:id/delete', (req, res) => {
    res.send(`This is a delete page for comment with id ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});