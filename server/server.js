'use strict'

const express = require('express');

const app = express();
app.get('/hello', (req, res, next) => {
  res.send("Hello from the server!");
})

app.get('/', (req, res, next) => {
  res.send("Youre on the home page!");
});



module.exports = app;