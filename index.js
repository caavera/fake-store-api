const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.send('Hello, world');
});

app.get('/new-route', (req,res) => {
  res.send('Hello, I am a new route');
});

app.get('/products', (req,res) => {
  res.json([
    {
      name: 'product 1',
      price: 1000
    },
    {
      name: 'product 1',
      price: 1000
    }
  ]);
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
