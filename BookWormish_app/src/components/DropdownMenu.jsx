// src/components/DropdownMenu.jsx
import React from 'react';

const DropdownMenu = ({ closeDropdown }) => {
  return (
    <div
      className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg"
      onClick={closeDropdown}
    >
      <ul className="py-1">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            Categories
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            Reading List
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            Favorites
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;

