// src/components/BookDetails.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const book = location.state?.book; // Retrieve book data from location state

  if (!book) return <div className="p-4 text-center">No book selected</div>;

  // Simplify display information
  const displayCategories = book.subjects?.slice(0, 2).join(', ') || 'No categories available';
  const displayPublishers = book.publisher?.slice(0, 2).join(', ') || 'No publisher available';

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <div className="flex flex-col md:flex-row">
        <img
          src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'https://via.placeholder.com/150'}
          alt={book.title}
          className="w-full md:w-48 h-auto object-cover rounded-lg md:mr-8 mb-4 md:mb-0"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Author:</strong> {book.author_name?.join(', ') || 'Unknown Author'}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Publisher:</strong> {displayPublishers}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Year:</strong> {book.first_publish_year || 'No data available'}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>ISBN:</strong> {book.isbn?.join(', ') || 'No ISBN available'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Categories:</strong> {displayCategories}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Number of Pages:</strong> {book.number_of_pages_median || 'No data'}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <strong>Description:</strong> {book.description || 'No description available.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;




