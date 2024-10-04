// src/components/BookCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, onBookSelect }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/100x150?text=No+Cover';

  // Extract single format, language, and year to avoid overflow
  const format = book.format ? book.format[0] : 'N/A';
  const language = book.language ? book.language[0].toUpperCase() : 'N/A';
  const year = book.first_publish_year || 'N/A';

  return (
    <div
      className="max-w-2xl mx-auto flex items-start bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300 mb-4"
      style={{ width: '60%' }} // Adjust width to avoid full width
      onClick={() => onBookSelect(book)}
    >
      <img
        src={coverUrl}
        alt={book.title}
        className="w-24 h-36 object-cover rounded-md mr-4"
      />
      <div className="flex-1">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          <Link to={`/book/${book.key}`} className="hover:underline">
            {book.title}
          </Link>
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {book.publisher ? book.publisher[0] : 'Unknown Publisher'}
        </p>
        {/* Additional Details */}
        <div className="text-sm text-gray-600 dark:text-gray-400 flex space-x-2">
          <span><strong>Year:</strong> {year}</span>
          <span><strong>Language:</strong> {language}</span>
          <span><strong>File:</strong> {format}</span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;










