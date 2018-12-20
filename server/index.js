const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');

const { urlencoded, json } = bodyParser;
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

// const DIRECT_ROUTE = path.join(__dirname, 'public/');
app.use(express.static('public'));

app.listen(4500, () => {
  console.log('You\'ve sucessfully connected!');
});
