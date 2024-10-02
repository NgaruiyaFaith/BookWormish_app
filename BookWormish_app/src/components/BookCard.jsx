// src/components/BookCard.jsx
import React from 'react';

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/100x150?text=No+Cover';

  return (
    <div className="flex items-start bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-24 h-36 object-cover rounded-md mr-4"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          {book.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {book.publisher ? book.publisher[0] : 'Unknown Publisher'}
        </p>
      </div>
    </div>
  );
};

export default BookCard;


