import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import axiosInstance from '../utils/axiosInstance';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const loadProducts = useCallback(async () => {
    try {
      const res = await axiosInstance.get('660/products');
      setProducts(res);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const value = useMemo(
    () => ({
      products,
      error,
      loadProducts,
    }),
    [products, loadProducts, error],
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProducts = () => useContext(ProductsContext);
