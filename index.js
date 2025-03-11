const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.send('Hello, world');
});

app.get('/new-route', (req,res) => {
  res.send('Hello, I am a new route');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})
