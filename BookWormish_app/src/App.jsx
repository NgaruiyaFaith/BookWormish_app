// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Footer from './components/Footer';
import DropdownMenu from './components/DropdownMenu';
import BookCard from './components/BookCard';
import Pagination from './components/Pagination';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [books, setBooks] = useState([]);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      // Save preference to localStorage
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Retrieve theme from localStorage on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  // Handle Search
  const handleSearch = async (query) => {
    setBooks([]); // Clear previous results
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      const fetchedBooks = data.docs.slice(0, 50); // Fetch more to accommodate pagination
      setBooks(fetchedBooks);
    } catch (error) {
      console.error('Error fetching books:', error);
      // Optionally, set an error state to display a message to the user
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-24 px-4">
        <Title />
        <SearchBar onSearch={handleSearch} />
        <BookList books={books} />
      </main>
      <Footer />
    </div>
  );
}

export default App;




