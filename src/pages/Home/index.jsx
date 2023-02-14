import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = ({ products, loading }) => ({
  products,
  loading: loading.some(
    x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART',
  ),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () =>
    dispatch({
      type: 'LOAD_PRODUCTS_REQUEST',
      payload: {
        url: '660/products',
        method: 'get',
      },
      meta: {
        loadingId: -1,
      },
    }),
  loadCart: () =>
    dispatch({
      type: 'LOAD_CART_REQUEST',
      payload: {
        url: '660/cart',
        method: 'get',
      },
      meta: {
        loadingId: -1,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
