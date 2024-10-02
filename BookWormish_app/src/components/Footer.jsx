// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-4 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} BookWormish. All rights reserved.</p>
        <p className="text-sm mt-1">Designed by Your Name</p>
      </div>
    </footer>
  );
};

export default Footer;
