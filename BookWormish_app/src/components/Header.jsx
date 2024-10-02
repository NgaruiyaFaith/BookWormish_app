// src/components/Header.jsx
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import DropdownMenu from './DropdownMenu';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left Side: Hamburger Menu and Sign In */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <div className="relative">
            <button
              onClick={handleHamburgerClick}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-label="Open Menu"
            >
              <FaBars size={24} />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && <DropdownMenu closeDropdown={closeDropdown} />}
          </div>

          {/* Sign In Button */}
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition">
            Sign In
          </button>
        </div>

        {/* Right Side: Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-gray-700 dark:text-gray-200 focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;


