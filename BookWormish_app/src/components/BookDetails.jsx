import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state || {};

  if (!book) {
    return <p className="text-center text-gray-600 dark:text-gray-300">No book details available.</p>;
  }

  return (
    <div className="container mx-auto px-4 pt-6">
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <img
          src={book.cover_i ? book.cover_i : 'https://via.placeholder.com/150?text=No+Cover'}
          alt={book.title || 'No Title Available'}
          className="w-48 h-72 object-cover mx-auto mb-4"
        />
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
          {book.title || 'No Title Available'}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          <strong>Author:</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          <strong>Published Year:</strong> {book.first_publish_year || 'N/A'}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          <strong>Language:</strong> {book.language ? book.language[0] : 'Unknown'}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          <strong>Publisher:</strong> {book.publisher ? book.publisher[0] : 'Unknown Publisher'}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          <strong>Format:</strong> {book.format ? book.format[0] : 'Unknown Format'}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;























































