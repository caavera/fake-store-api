const express = require('express');

const ProductsService = require('../services/products.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req,res) => {
  // const { size } = req.query;
  const products = service.find();

  res.json(products);
});

router.get('/filter', (req,res) => {
  res.send('Hello, I am a filter');
});

router.get('/:id', (req,res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req,res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

router.patch('/:patch', (req,res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id: id
  });
});

router.delete('/:patch', (req,res) => {
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id: id
  });
});

module.exports = router;
