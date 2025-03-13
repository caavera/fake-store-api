const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routerApi = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/api', (req,res) => {
  res.send('Hello, world');
});

app.get('/api/new-route', (req,res) => {
  res.send('Hello, I am a new route');
});

routerApi(app);

// Middlewares de manejo de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
