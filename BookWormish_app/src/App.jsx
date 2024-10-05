// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import debounce from 'lodash.debounce';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [books, setBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState(null); // State for selected book
  const totalBooksToFetch = 30;
  const booksPerPage = 12;

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

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

  useEffect(() => () => debouncedSearch.cancel(), []);

  const handleSearch = (query) => debouncedSearch(query);

  const handleBookSelect = (book) => {
    setSelectedBook(book); // Set the selected book when a book is clicked
  };

  useEffect(() => {
    const start = (currentPage - 1) * booksPerPage;
    const end = start + booksPerPage;
    setDisplayBooks(books.slice(start, end));
  }, [currentPage, books]);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`} id="root">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="content">
          <main className="pt-24 px-4">
            <Routes>
              {/* Home Route */}
              <Route
                path="/"
                element={
                  <>
                    <Title />
                    <SearchBar onSearch={handleSearch} />
                    {loading ? <p>Loading...</p> : <BookList books={displayBooks} onBookSelect={handleBookSelect} />}
                    <Pagination currentPage={currentPage} totalPages={Math.ceil(books.length / booksPerPage)} onPageChange={setCurrentPage} />
                  </>
                }
              />
              {/* Book Details Route */}
              <Route path="/book/:id" element={<BookDetails book={selectedBook} />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


                  





































































  


                  



































































