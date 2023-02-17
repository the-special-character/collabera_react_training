import express from 'express';

const cartRouter = express.Router();

cartRouter.get('/', (req, res) => {
  res.send('cart info');
});

cartRouter.post('/', (req, res) => {
  res.send('cart info');
});

cartRouter.put('/:id', (req, res) => {
  res.send('cart info');
});

cartRouter.delete('/:id', (req, res) => {
  res.send('cart info');
});

export default cartRouter;
