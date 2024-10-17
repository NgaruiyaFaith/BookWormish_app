import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};
  const [relatedBooks, setRelatedBooks] = useState([]);

  useEffect(() => {
    // Fetch related books or recommendations if the book data exists
    if (book && book.title) {
      const fetchRelatedBooks = async () => {
        try {
          const response = await fetch(
            `https://api2.isbndb.com/books/${encodeURIComponent(book.title.split(' ')[0])}?page=1&pageSize=6`,
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': '56379_e3dd88f5934eb5a5f1b2eb596d34dbf6', // Replace with your API key
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
            console.log('Related Books API Response:', data); // Debug log to inspect related books data
            if (data && data.books) {
              setRelatedBooks(data.books);
            }
          }
        } catch (error) {
          console.error('Error fetching related books:', error);
        }
      };
      fetchRelatedBooks();
    }
  }, [book]);

  if (!book) {
    return <p className="text-center text-gray-600 dark:text-gray-300">No book details available.</p>;
  }

  useEffect(() => {
    // Debug log to check the book details
    console.log('Book Details:', book);
  }, [book]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-start bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
        {/* Left column: Book cover */}
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <img
            src={book.cover_i ? book.cover_i : 'https://via.placeholder.com/200x300?text=No+Cover'}
            alt={book.title || 'No Title Available'}
            className="w-48 h-auto object-cover rounded-md"
          />
        </div>

        {/* Right column: Book details */}
        <div className="w-full md:w-2/3 md:pl-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            {book.title || 'No Title Available'}
          </h1>
          <h2 className="text-lg text-teal-500 mb-3">
            {Array.isArray(book.author_name) ? book.author_name.join(', ') : book.author_name || 'Unknown Author'}
          </h2>

          <div className="flex items-center mb-3">
            {/* Rating */}
            <span className="text-yellow-500 text-lg font-semibold mr-2">5.0 / 5.0</span>
            <span className="text-sm text-gray-500">0 comments</span>
          </div>

          {/* Description */}
          <div className="mb-3">
            <strong>Description:</strong>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {book.description || 'No description available.'}
            </p>
          </div>

          {/* Categories */}
          <div className="mb-3">
            <strong>Categories:</strong>
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
              {Array.isArray(book.categories) ? book.categories.join(', ') : book.categories || 'N/A'}
            </span>
          </div>

          {/* Additional book details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
            <p><strong>Year:</strong> {book.first_publish_year || 'N/A'}</p>
            <p><strong>Language:</strong> {Array.isArray(book.language) ? book.language.join(', ') : book.language || 'Unknown'}</p>
            <p><strong>ISBN 10:</strong> {book.isbn10 || 'N/A'}</p>
            <p><strong>ISBN 13:</strong> {book.isbn13 || 'N/A'}</p>
            <p><strong>Pages:</strong> {book.pages || 'N/A'}</p>
            <p><strong>Publisher:</strong> {Array.isArray(book.publisher) ? book.publisher.join(', ') : book.publisher || 'Unknown Publisher'}</p>
          </div>
        </div>
      </div>

      {/* Related books section */}
      {relatedBooks.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">You may be interested in:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedBooks.map((relatedBook, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300"
                onClick={() => navigate(`/book/${relatedBook.isbn13 || relatedBook.isbn}`, {
                  state: { book: relatedBook },
                  replace: false, // Ensures it's a fresh navigation
                })}
              >
                <img
                  src={relatedBook.image ? relatedBook.image : 'https://via.placeholder.com/100x150?text=No+Cover'}
                  alt={relatedBook.title || 'No Title Available'}
                  className="w-24 h-36 object-cover rounded-md mb-2"
                />
                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-1 truncate">
                  {relatedBook.title || 'No Title Available'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {Array.isArray(relatedBook.authors) ? relatedBook.authors.join(', ') : relatedBook.authors || 'Unknown Author'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;




























































































































