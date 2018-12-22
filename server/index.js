const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { findPicturesByRoomId } = require('../database/');
const path = require('path');

const { urlencoded, json } = bodyParser;
const app = express();

app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(express.static('public'));

app.get('/rooms/:id/pictures', function (req, res) {
  findPicturesByRoomId(req.params.id)
    .then(function (images) {
      res.send(images.image_url);
    });
});

app.get('/:id', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.listen(4500, () => {
  console.log('You\'ve sucessfully connected!');
});
