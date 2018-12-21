const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const { findPicturesById } = require('../database/');
// const path = require('path');

const { urlencoded, json } = bodyParser;
const app = express();

app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));
app.use(json());

// const DIRECT_ROUTE = path.join(__dirname, 'public/');
app.use(express.static('public'));

app.get('/rooms/:id/pictures', function (req, res) {
  findPicturesById(req.params.id)
    .then(function (images) {
      res.send(images.image_url);
    });
});
app.listen(4500, () => {
  console.log('You\'ve sucessfully connected!');
});
