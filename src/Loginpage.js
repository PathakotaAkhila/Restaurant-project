import './Loginpage.css';
import React, { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter username and password');
    } else {
      setError('');
      // Perform login action
    }
  };

  return (
    <div className="login-container">
      <img src="/path/to/image.jpg" alt="login" className="login-image" />
      <div className="input-container">
        <label htmlFor="username" className="input-label">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password" className="input-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;