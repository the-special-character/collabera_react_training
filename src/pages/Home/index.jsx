import React, { useCallback, useEffect } from 'react';
import { useProducts } from '../../context/productsContext';
import { useCartContext } from '../../context/cartContext';
import Product from '../../components/Product';
import { useErrorContext } from '../../context/errorContext';
import { useLoadingContext } from '../../context/loadingContext';

function Home() {
  const { loadProducts, products } = useProducts();
  const { loadCart } = useCartContext();
  const { errors } = useErrorContext();
  const { loading } = useLoadingContext();

  const loadData = useCallback(async () => {
    await Promise.all([loadProducts(), loadCart()]);
  }, [loadProducts, loadCart]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  console.log(loading);

  if (
    loading.some(x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART')
  ) {
    return <h1>Loading...</h1>;
  }

  if (
    errors.some(x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART')
  ) {
    return (
      <div>
        {errors.map(x => (
          <p key={x.action}>{x.message}</p>
        ))}
      </div>
    );
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
