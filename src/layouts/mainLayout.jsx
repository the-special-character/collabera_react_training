import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import Header from '../components/Header';

function MainLayout() {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;
