import express from 'express';

const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  res.send('products info');
});

productsRouter.post('/', (req, res) => {
  res.send('products info');
});

productsRouter.put('/:id', (req, res) => {
  res.send('products info');
});

productsRouter.delete('/:id', (req, res) => {
  res.send('products info');
});

export default productsRouter;
