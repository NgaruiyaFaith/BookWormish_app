import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Footer from './components/Footer';
import Pagination from './components/Pagination';

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [books, setBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const totalBooksToFetch = 30; // Total books to fetch initially
    const booksPerPage = 10; // Display only 10 books per page

    // Toggle Dark Mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Apply dark mode class to <html>
    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    // Handle Search
    const handleSearch = async (query) => {
        setLoading(true);
        setCurrentPage(1); // Reset to first page on new search
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=${totalBooksToFetch}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setBooks(data.docs);
            setDisplayBooks(data.docs.slice(0, booksPerPage)); // Show first 10 books
        } catch (error) {
            console.error('Error fetching books:', error);
        } finally {
            setLoading(false);
        }
    };

    // Update displayed books when page changes
    useEffect(() => {
        const start = (currentPage - 1) * booksPerPage;
        const end = start + booksPerPage;
        setDisplayBooks(books.slice(start, end));
    }, [currentPage, books]);

    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`} id="root">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="content">
              <main className="pt-24 px-4">
                  <Title />
                  <SearchBar onSearch={handleSearch} />
                  {loading ? <p>Loading...</p> : <BookList books={displayBooks} />}
                  <Pagination currentPage={currentPage} totalPages={Math.ceil(totalBooksToFetch / booksPerPage)} onPageChange={setCurrentPage} />
              </main>
          </div>
          <Footer />
      </div>
  );
}

export default App;















