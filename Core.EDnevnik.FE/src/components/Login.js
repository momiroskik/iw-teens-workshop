// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../constants/users';

function Login({ setLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkUser = users.find((user) => user.email === email && user.pass === password);
    if (checkUser) {
      console.log('User found:', checkUser);
      localStorage.setItem('user', JSON.stringify(checkUser));
      setLoggedIn(true);
      navigate('/');
    } else {
      console.log('Login failed: Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
