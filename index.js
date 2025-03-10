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
  res.json({
    name: 'product 1',
    price: 1000
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})
