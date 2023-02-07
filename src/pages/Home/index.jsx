import React, { useEffect } from 'react';
import { useProducts } from '../../context/productsContext';

function Home() {
  const { loadProducts, products } = useProducts();

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div>
      <h1>Home page</h1>
      {products.map(x => (
        <p key={x.id}>{x.title}</p>
      ))}
    </div>
  );
}

export default Home;
