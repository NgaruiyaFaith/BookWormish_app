// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [menuDropdownVisible, setMenuDropdownVisible] = useState(false);
  const [signInDropdownVisible, setSignInDropdownVisible] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-white dark:bg-gray-700 shadow-md relative">
      {/* Menu Dropdown */}
      <div className="relative">
        <button
          className="text-teal-500 text-xl cursor-pointer"
          onClick={() => setMenuDropdownVisible(!menuDropdownVisible)}
        >
          &#9776;
        </button>
        {menuDropdownVisible && (
          <div className="absolute left-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-xl z-20">
            <Link to="/category" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
              Categories
            </Link>
            <Link to="/reading-list" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
              Reading List
            </Link>
            <Link to="/favorites" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
              Favorites
            </Link>
          </div>
        )}
      </div>

      {/* Title & Toggle */}
      <div className="flex items-center space-x-4">
        {/* Sign In Dropdown */}
        <div className="relative">
          <button
            className="text-teal-500 underline cursor-pointer"
            onClick={() => setSignInDropdownVisible(!signInDropdownVisible)}
          >
            Sign In / Register
          </button>
          {signInDropdownVisible && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-xl z-20">
              <Link to="/signin" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                Sign In
              </Link>
              <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-2">
          <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="hidden"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
              <div
                className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
                  darkMode ? 'transform translate-x-full bg-teal-500' : ''
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;



