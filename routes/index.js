const productsRoter = require('./products.router');
// const usersRoter = require('./users.router');

function routerApi(app){
  app.use('/api/products', productsRoter);
  // app.use('/api/users', usersRoter);
}

module.exports = routerApi;
