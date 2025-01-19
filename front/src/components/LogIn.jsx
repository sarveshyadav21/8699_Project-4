import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigate('/dashboard');
  };

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  return (
    <div className="login">
      <h1>Welcome</h1>
      <div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
};

export default LogIn;