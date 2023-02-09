import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../context/authContext';
import { LoadingProvider } from '../context/loadingContext';
import { ErrorProvider } from '../context/errorContext';

function BaseLayout() {
  return (
    <LoadingProvider>
      <ErrorProvider>
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </ErrorProvider>
    </LoadingProvider>
  );
}

export default BaseLayout;
