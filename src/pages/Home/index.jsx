import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log('location', location);

  const navigateToAuth = () => {
    navigate('/auth');
  };

  return (
    <div>
      <h1>Home page</h1>
      <button type="button" onClick={navigateToAuth}>
        Go To Auth
      </button>
    </div>
  );
}

export default Home;
