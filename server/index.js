const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const { findPicturesByRoomId } = require('../database/');

const { urlencoded, json } = bodyParser;
const app = express();

app.use(morgan('dev'));
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(express.static('public'));

app.get('/rooms/:id/pictures', (req, res) => {
  findPicturesByRoomId(req.params.id)
    .then((images) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.send(images.image_url);
    });
});

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(4500, () => {
  console.log('You\'ve sucessfully connected!');
});
