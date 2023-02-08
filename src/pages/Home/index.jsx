import React, { useCallback, useEffect } from 'react';
import { useProducts } from '../../context/productsContext';
import { useCartContext } from '../../context/cartContext';
import Product from '../../components/Product';

function Home() {
  const { loadProducts, products, error } = useProducts();
  const { loadCart } = useCartContext();

  const loadData = useCallback(async () => {
    await Promise.all([loadProducts(), loadCart()]);
  }, [loadProducts, loadCart]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
