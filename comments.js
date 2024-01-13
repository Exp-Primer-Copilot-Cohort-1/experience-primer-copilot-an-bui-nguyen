// Create web server with Node.js

// Import Node.js modules
const express = require('express');
const bodyParser = require('body-parser');

// Create web server
const app = express();

// Set port
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set static files
app.use(express.static('public'));

// Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Store comments
const comments = [
  {
    name: 'John',
    comment: 'This is a comment',
    date: '10/10/2020',
  },
  {
    name: 'Mary',
    comment: 'This is another comment',
    date: '11/10/2020',
  },
];

// GET request to home page
app.get('/', (req, res) => {
  res.render('home', { comments });
});

// POST request to home page
app.post('/', (req, res) => {
  const newComment = {
    name: req.body.name,
    comment: req.body.comment,
    date: new Date().toLocaleDateString(),
  };
  comments.push(newComment);
  res.redirect('/');
});

// Start web server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});