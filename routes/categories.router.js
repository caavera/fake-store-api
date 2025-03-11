const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const categories = [];
  const { size } = req.query;
  const limit = size || 6;
  for (let i = 0; i < limit; i++) {
    categories.push({
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      description: faker.lorem.sentence(),
      image: faker.image.url(),
    });
  }
  res.json(categories);
});

router.get('/filter', (req, res) => {
  res.send('Hello, I am a category filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: faker.commerce.department(),
    description: faker.lorem.sentence(),
    image: faker.image.url(),
  });
});

module.exports = router;
