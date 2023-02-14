import { connect } from 'react-redux';
import Product from './product';

const mapStateToProps = ({ cart, loading }, { product }) => ({
  cartItem: cart.find(x => x.productId === product.id),
  isLoading: loading.some(x => x.loadingId === product.id),
});

const mapDispatchToProps = dispatch => ({
  addToCart: payload =>
    dispatch({
      type: 'ADD_CART_REQUEST',
      payload,
      meta: {
        loadingId: payload.productId,
      },
    }),
  updateCartItem: payload =>
    dispatch({
      type: 'UPDATE_CART_REQUEST',
      payload,
      meta: {
        loadingId: payload.productId,
      },
    }),
  deleteCartItem: payload =>
    dispatch({
      type: 'DELETE_CART_REQUEST',
      payload,
      meta: {
        loadingId: payload.productId,
      },
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
