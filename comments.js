// create web server with express
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// index page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('pages/index', { posts: posts });
});

// about page
app.get('/about', (req, res) => {
  res.render('pages/about');
});

// start server on port 3000
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

// Array of posts
const posts = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
    date: 'September 24, 2019'
  },
  {
    id: 2,
    title: 'Consectetur adipiscing elit',
    date: 'September 26, 2019'
  },
  {
    id: 3,
    title: 'Integer molestie lorem at massa',
    date: 'September 28, 2019'
  }
];