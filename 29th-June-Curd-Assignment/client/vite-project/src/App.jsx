import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './Components/Login&SignUp/SignupForm';
import LoginForm from './Components/Login&SignUp/LoginForm';
import Home from './Components/HomePage/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<SignupForm />} />
        <Route path="/home" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;