import React, { useState } from 'react';
import './Login&SignupForm.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });

      setMessage('Logged in successfully');
      console.log('Form submitted successfully:', response.data);
      if (response.data === 'Success!') {
        navigate('/home'); // Redirect to the home page
      } else {
        setMessage(response.data); // Display error message from the server
      }
    } catch (error) {
      setMessage('An error occurred');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <input type="submit" className="button" />
        <pre>Create an account! <Link className='btn' to="/SignUp">Sign Up</Link></pre>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default LoginForm;