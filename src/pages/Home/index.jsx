import React from 'react';
import { useAuthContext } from '../../context/authContext';

function Home() {
  const { logout } = useAuthContext();

  return (
    <div>
      <h1>Home page</h1>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
