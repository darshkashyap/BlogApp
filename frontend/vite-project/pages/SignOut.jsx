// src/pages/SignOut.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    alert('You have been logged out');
    navigate('/signin');
  }, [navigate]);

  return null;
};

export default SignOut;
