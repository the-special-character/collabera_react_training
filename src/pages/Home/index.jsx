import React, { useCallback, useEffect } from 'react';
import { useProducts } from '../../context/productsContext';
import { useCartContext } from '../../context/cartContext';
import Product from '../../components/Product';
import { useLoadingContext } from '../../context/loadingContext';

function Home() {
  const { loadProducts, products } = useProducts();
  const { loadCart } = useCartContext();
  const { loading } = useLoadingContext();

  const loadData = useCallback(async () => {
    await Promise.all([loadProducts(), loadCart()]);
  }, [loadProducts, loadCart]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  console.log('Home render');

  if (
    loading.some(x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART')
  ) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {products.map(product => {
        const isLoading = loading.some(x => x.loadingId === product.id);
        return (
          <Product key={product.id} product={product} isLoading={isLoading} />
        );
      })}
    </div>
  );
}

export default Home;
