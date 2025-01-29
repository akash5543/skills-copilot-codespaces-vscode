// create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// create route to get comments
app.get('/comments', (req, res) => {
    res.send('Comments');
});