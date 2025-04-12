// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end items-center h-[80vh] text-center px-4">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">Welcome to <span className="text-purple-600">POPX</span></h1>

      <button
        onClick={() => navigate('/createaccount')}
        className="w-full max-w-xs py-3 bg-purple-600 text-white rounded-lg mb-4 text-sm font-medium hover:bg-purple-700 transition"
      >
        Create Account
      </button>

      <p className="text-sm text-gray-600">
        Already Registered?{' '}
        <button
          onClick={() => navigate('/signin')}
          className="text-purple-600 hover:underline font-medium"
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default Home;
