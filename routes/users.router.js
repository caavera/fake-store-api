const express = require('express');
const UsersService = require('../services/users.service');

const router = express.Router();
const service = new UsersService();

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedUser = service.update(id, body);
  res.json(updatedUser);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const response = service.delete(id);
  res.json(response);
});

module.exports = router;
