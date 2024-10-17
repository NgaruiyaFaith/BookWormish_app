import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Title from './components/Title';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Footer from './components/Footer';
import Pagination from './components/Pagination';
import debounce from 'lodash.debounce';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [books, setBooks] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const totalBooksToFetch = 30;
  const booksPerPage = 10;
  const ISBNDB_API_KEY = '56379_e3dd88f5934eb5a5f1b2eb596d34dbf6'; // Replace with your actual API key

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Debounced search function
  const debouncedSearch = debounce(async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api2.isbndb.com/books/${encodeURIComponent(query)}?page=1&pageSize=${totalBooksToFetch}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '56379_e3dd88f5934eb5a5f1b2eb596d34dbf6',
          },
        }
      );

      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();

      if (data && data.books) {
        const formattedBooks = data.books.map((item) => ({
          title: item.title ? item.title : 'No Title Available',
          author_name: item.authors ? item.authors : ['Unknown Author'],
          first_publish_year: item.date_published ? item.date_published : 'N/A',
          cover_i: item.image ? item.image : '', // Use the correct cover image from ISBNdb
          key: item.isbn13 || item.isbn, // Use a unique identifier from ISBNdb
        }));
        setBooks(formattedBooks);
        setDisplayBooks(formattedBooks.slice(0, booksPerPage));
      } else {
        console.error('Unexpected response format', data);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  }, 300);

  useEffect(() => () => debouncedSearch.cancel(), []);

  const handleSearch = (query) => {
    setQuery(query);
    debouncedSearch(query);
  };

  // Update displayed books when page changes
  useEffect(() => {
    const start = (currentPage - 1) * booksPerPage;
    const end = start + booksPerPage;
    setDisplayBooks(books.slice(start, end));
  }, [currentPage, books]);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-800 text-white' : 'bg-softGray text-gray-900'}`} id="root">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="container mx-auto px-4 pt-6 flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Title />
                  <SearchBar onSearch={handleSearch} />
                  {loading && <p>Loading...</p>}
                  {!loading && query && books.length === 0 && (
                    <p className="text-center text-gray-600 dark:text-gray-300">No books found.</p>
                  )}
                  {books.length > 0 && (
                    <>
                      <BookList books={displayBooks} />
                      <Pagination currentPage={currentPage} totalPages={Math.ceil(books.length / booksPerPage)} onPageChange={setCurrentPage} />
                    </>
                  )}
                </>
              }
            />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </div>
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
}

export default App;








                  





































































  


                  






































































































































                  





































































  


                  
























































































                  





































































  


                  



































































                  




































































                  











































































                  





































































  


                  



































































