import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BookCard = ({ book, onBookSelect }) => {
  // Use the image URL provided by ISBNdb or a placeholder if not available
  const coverUrl = book.cover_i
    ? book.cover_i
    : 'https://via.placeholder.com/100x150?text=No+Cover';

  const navigate = useNavigate();

  const handleClick = () => {
    if (book && book.key) {
      // Navigate to BookDetails and pass the book info using state
      navigate(`/book/${book.key.split('/')[2]}`, { state: { book } });
    } else {
      console.error('Book key is undefined');
    }
  };

  return (
    <div
      className="flex items-start bg-white dark:bg-gray-700 border border-gray-300 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300 cursor-pointer max-w-3xl mx-auto"
      onClick={handleClick}
    >
      <img
        src={coverUrl}
        alt={book.title || 'No Title Available'}
        className="w-24 h-36 object-cover rounded-md mr-4"
      />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-1">
            {/* Use Link to navigate and pass book data */}
            {book && book.key ? (
              <Link
                to={`/book/${book.key.split('/')[2]}`}
                state={{ book }}
                className="hover:underline"
              >
                {book.title || 'No Title Available'}
              </Link>
            ) : (
              'No Title Available'
            )}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
          </p>
        </div>
        {/* Book details in a horizontal layout */}
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4 mt-4">
          <p><strong>Year:</strong> {book.first_publish_year || 'N/A'}</p>
          <p><strong>Language:</strong> {book.language ? book.language[0] : 'Unknown'}</p>
          <p><strong>Format:</strong> {book.format ? book.format[0] : 'Unknown'}</p>
          <p><strong>Publisher:</strong> {book.publisher ? book.publisher[0] : 'Unknown'}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
























































































































