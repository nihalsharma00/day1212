const express = require('express');
const data = require('./data');

const routes = express.Router();

routes.get('/bollywood', (req, res) => {
  const result = data.filter((item) => item.category === "Bollywood");
  res.send(result.map((item) => item.image));
});

routes.get('/hollywood', (req, res) => {
  const result2 = data.filter((item) => item.category === "Hollywood");
  res.send(result2);
});

module.exports = routes;
