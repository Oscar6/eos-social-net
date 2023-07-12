import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>EOS Social Network</h1>
      <p>Register or Login</p>
      <div>
        <button onClick={() => window.location.href = '/register'}>Register</button>
        <button onClick={() => window.location.href = '/login'}>Login</button>
      </div>
    </div>
  );
};

export default HomePage;
