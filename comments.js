// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

// Parse the body of POST requests
app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Create a new comment
app.post('/comments', (req, res) => {
  const { author, content } = req.body;
  const comment = comments.createComment(author, content);
  res.json(comment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});