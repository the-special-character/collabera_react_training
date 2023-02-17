import express from 'express';
import dotEnv from 'dotenv';
import Routes from './routes';

dotEnv.config();

const port = process.env.PORT || 3000;

const app = express();

Routes.initRoutes(app);

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
