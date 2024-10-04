// src/components/BookCard.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/book/${book.key}`, { state: { book } }); // Navigate to book details with state
  };

  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/100x150?text=No+Cover';

  const displayLanguage = book.language ? book.language[0] : 'N/A'; // Display one language
  const displayFormat = book.format ? book.format[0] : 'N/A'; // Display one format
  const displayYear = book.first_publish_year || 'Unknown Year';

  return (
    <div
      className="flex items-start bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 max-w-4xl mx-auto mb-4 cursor-pointer"
      onClick={handleCardClick} // Use the handler on click
    >
      <img
        src={coverUrl}
        alt={book.title}
        className="w-24 h-36 object-cover rounded-md mr-4"
      />
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
          <Link to={`/book/${book.key}`} className="hover:underline">
            {book.title}
          </Link>
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
          {book.publisher ? book.publisher[0] : 'Unknown Publisher'}
        </p>
        {/* Additional Information: Year, Language, Format */}
        <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          <span>
            <strong>Year:</strong> {displayYear}
          </span>{' '}
          |{' '}
          <span>
            <strong>Language:</strong> {displayLanguage}
          </span>{' '}
          |{' '}
          <span>
            <strong>File:</strong> {displayFormat}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;













