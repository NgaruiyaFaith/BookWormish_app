// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import debounce from 'lodash.debounce';
import Header from './components/Header'; // Ensure Header is included for menu and sign-in

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [books, setBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const totalBooksToFetch = 30;
  const booksPerPage = 10;

  // Toggle Dark Mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Apply dark mode class to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Debounced search function
  const debouncedSearch = debounce(async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=${totalBooksToFetch}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setBooks(data.docs);
      setDisplayBooks(data.docs.slice(0, booksPerPage));
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  }, 300);

  // Clean up the debounced function on component unmount
  useEffect(() => () => debouncedSearch.cancel(), []);

  const handleSearch = (query) => {
    setQuery(query);
    debouncedSearch(query);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  // Update displayed books when page changes
  useEffect(() => {
    const start = (currentPage - 1) * booksPerPage;
    const end = start + booksPerPage;
    setDisplayBooks(books.slice(start, end));
  }, [currentPage, books]);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`} id="root">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="container mx-auto px-4 pt-6 flex-1">
          <Title />
          <SearchBar onSearch={handleSearch} />
          {loading && <p>Loading...</p>}
          {!loading && query && books.length === 0 && (
            <p className="text-center text-gray-600 dark:text-gray-300">No books found.</p>
          )}
          {books.length > 0 && (
            <>
              <BookList books={displayBooks} onBookSelect={handleBookSelect} />
              <Pagination currentPage={currentPage} totalPages={Math.ceil(books.length / booksPerPage)} onPageChange={setCurrentPage} />
            </>
          )}
        </div>
        {/* Footer always at the bottom */}
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
}

export default App;





                  





































































  


                  



































































