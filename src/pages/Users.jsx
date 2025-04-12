// src/pages/User.jsx
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const User = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center mb-4">
          <FaUserCircle className="text-5xl text-purple-600 mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-gray-800">John Doe</h2>
            <p className="text-sm text-gray-500">john.doe@example.com</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel molestie nisl.
        </p>
        <p className="text-gray-600 text-sm">
          Nullam facilisis, velit a dapibus blandit, massa arcu consectetur nunc.
        </p>
      </div>
    </div>
  );
};

export default User;
