import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Users from './pages/Users.jsx';
import SignIn from './pages/SignIn.jsx';
import CreateAccount from './pages/CreateAccount.jsx';
import { AiFillHome } from 'react-icons/ai';

function App() {
  const pages = [
    { name: 'Home', path: '/home' },
    { name: 'Create Account', path: '/createaccount' },
    { name: 'Sign In', path: '/signin' },
    { name: 'Users', path: '/users' },
  ];

  const [currentPage, setCurrentPage] = useState(1);

  // Handle page navigation
  const navigateTo = (pageNumber) => {
    setCurrentPage(pageNumber);
    const targetPath = pages[pageNumber - 1].path;
    window.history.pushState({}, '', targetPath);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  // Handle next page navigation
  const handleNext = () => {
    if (currentPage < pages.length) {
      navigateTo(currentPage + 1);
    } else {
      navigateTo(1); // When on last page, go to the first page
    }
  };

  // Handle previous page navigation
  const handlePrevious = () => {
    if (currentPage > 1) {
      navigateTo(currentPage - 1);
    } else {
      navigateTo(pages.length); // When on first page, go to the last page
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-6">
          {/* Header with Home Icon and Pagination */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigateTo(1)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              title="Home"
            >
              <AiFillHome />
            </button>

            <div className="flex items-center gap-2">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="px-3 py-2 text-gray-600 hover:bg-gray-300 rounded disabled:opacity-50"
                disabled={currentPage === 1}
              >
                {'<'}
              </button>

              {/* Pagination Buttons */}
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => navigateTo(index + 1)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                    currentPage === index + 1
                      ? 'bg-gray-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="px-3 py-2 text-gray-600 hover:bg-gray-300 rounded disabled:opacity-50"
                disabled={currentPage === pages.length}
              >
                {'>'}
              </button>
            </div>
          </div>

          {/* Page Rendering */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
