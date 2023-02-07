import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../context/authContext';

function BaseLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}

export default BaseLayout;
