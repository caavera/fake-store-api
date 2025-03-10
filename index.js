const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.send('Hello, world');
});

app.get('/new-route', (req,res) => {
  res.send('Hello, I am a new route');
});

app.get('/products', (req,res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      imag: faker.image.url()
    });
  }
  res.json(products);
});

app.get('/products/:id', (req,res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'product 1',
    price: 1000
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})
