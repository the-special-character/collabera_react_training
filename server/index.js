const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello wold');
});

app.get('/product/:id', (req, res) => {
  res.send(`Product id is ${req.params.id} for info`);
});

app.get('/products', (req, res) => {
  const { category } = req.query;
  res.send(`Products for category: ${category}`);
});

app.get('/contact', (req, res) => {
  res.send('contact info');
});

// const hostname = 'localhost';
const port = 3000;

app.listen(port, () => {
  console.log('Server started');
});

// const server = http.createServer((req, res) => {
//   switch (key) {
//     case value:
//       break;

//     default:
//       break;
//   }

//   //   res.statusCode = 200;
//   //   res.setHeader('Content-Type', 'text/plain');
//   //   res.end('hello world');
// });

// server.listen(port, hostname, () => {
//   console.log('server started');
// });
