import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import Header from '../components/Header';
import { ProductsProvider } from '../context/productsContext';
import { CartProvider } from '../context/cartContext';

function MainLayout() {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <ProductsProvider>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
    </ProductsProvider>
  );
}

export default MainLayout;
