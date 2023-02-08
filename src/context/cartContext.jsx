import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../utils/axiosInstance';
import { cartInitialValue, cartReducer } from '../reducers/cartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, cartInitialValue);

  const apiRequest = useCallback(async ({ apiData, type }) => {
    try {
      dispatch({ type: `${type}_REQUEST` });
      const res = await axiosInstance(apiData);
      dispatch({
        type: `${type}_SUCCESS`,
        payload:
          apiData.method === 'delete' ? apiData.url.split('/').at(-1) : res,
      });
    } catch (err) {
      dispatch({ type: `${type}_FAIL`, payload: err });
    }
  }, []);

  const loadCart = useCallback(async () => {
    const type = 'LOAD_CART';
    apiRequest({
      apiData: {
        method: 'get',
        url: '660/cart',
      },
      type,
    });
  }, [apiRequest]);

  const addToCart = useCallback(
    async data => {
      const type = 'ADD_CART';
      apiRequest({
        apiData: {
          method: 'post',
          url: '660/cart',
          data,
        },
        type,
      });
    },
    [apiRequest],
  );

  const updateCartItem = useCallback(
    async data => {
      const type = 'UPDATE_CART';
      apiRequest({
        apiData: {
          method: 'put',
          url: `660/cart/${data.id}`,
          data,
        },
        type,
      });
    },
    [apiRequest],
  );

  const deleteCartItem = useCallback(
    async data => {
      const type = 'DELETE_CART';
      apiRequest({
        apiData: {
          method: 'delete',
          url: `660/cart/${data.id}`,
        },
        type,
      });
    },
    [apiRequest],
  );

  const value = useMemo(
    () => ({
      loadCart,
      addToCart,
      updateCartItem,
      deleteCartItem,
      cartState,
    }),
    [loadCart, addToCart, updateCartItem, deleteCartItem, cartState],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCartContext = () => useContext(CartContext);
