const express = require('express');

const productsRoter = require('./products.router');
const usersRoter = require('./users.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', productsRoter);

  router.use('/products', productsRoter);
  router.use('/users', usersRoter);
}

module.exports = routerApi;
