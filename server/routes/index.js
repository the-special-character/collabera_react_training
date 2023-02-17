import authRouter from './auth.route';
import cartRouter from './cart.route';
import productsRouter from './products.route';
import userRouter from './user.route';

export default class Routes {
  static initRoutes(app) {
    app.get('/', (req, res) => {
      res.send('hello wold');
    });

    app.use('/api/user', userRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/products', productsRouter);
    app.use('/api/cart', cartRouter);
  }
}
