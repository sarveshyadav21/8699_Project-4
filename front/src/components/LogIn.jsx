import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  return (
    <div className="login">
      <h1>Welcome</h1>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default LogIn;