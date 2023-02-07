import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const loadProducts = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:3000/products');
      const json = await res.json();
      setProducts(json);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value = useMemo(
    () => ({
      products,
      loadProducts,
    }),
    [products, loadProducts],
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
