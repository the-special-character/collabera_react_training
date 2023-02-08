import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../utils/axiosInstance';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState('');

  const loadCart = useCallback(async () => {
    try {
      const res = await axiosInstance.get('660/cart');
      setCart(res);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const addToCart = useCallback(async data => {
    try {
      const res = await axiosInstance.post('660/cart', data);
      setCart(val => [...val, res]);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const value = useMemo(
    () => ({
      loadCart,
      addToCart,
      cart,
      error,
    }),
    [loadCart, addToCart, cart, error],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCartContext = () => useContext(CartContext);
