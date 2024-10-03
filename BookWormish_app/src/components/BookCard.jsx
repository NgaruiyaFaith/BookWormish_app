import React from 'react';

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/100x150?text=No+Cover';

  // Function to extract the first item from any list
  const getFirstItem = (items) => {
    return items && items.length > 0 ? items[0] : 'N/A';
  };

  return (
    <div className="flex items-center bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-24 h-36 object-cover rounded-md mr-4"
      />
      <div className="flex flex-1 justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {book.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Year: {book.publish_year ? book.publish_year[0] : 'Unknown'}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Category: {getFirstItem(book.subject)}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Format: {getFirstItem(book.format)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;







