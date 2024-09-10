import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HandleToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        if (token) {
            console.log('Token received:', token); // Debugging line
            localStorage.setItem('auth-token', token);
      navigate('/home');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default HandleToken;
