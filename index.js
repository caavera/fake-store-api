const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
  res.send('Hello, world');
});

app.get('/new-route', (req,res) => {
  res.send('Hello, I am a new route');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
})
