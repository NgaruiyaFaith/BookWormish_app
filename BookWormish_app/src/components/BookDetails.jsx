import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const book = location.state?.book; // Retrieve book data from location state

  if (!book) return <div>No book selected</div>;

  // Simplify display information
  const displayCategories = book.subjects?.slice(0, 2).join(', ') || 'No categories available';
  const displayPublishers = book.publisher?.slice(0, 2).join(', ') || 'No publisher available';

  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
      {/* Navigation Path */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        <span className="text-blue-500 cursor-pointer hover:underline">Main</span> | {book.title}
      </p>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Book Cover Image */}
        <div className="flex-shrink-0">
          <img
            src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'https://via.placeholder.com/150'}
            alt={book.title}
            className="w-48 h-auto object-cover rounded-lg"
          />
        </div>

        {/* Book Information */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Title and Author */}
            <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
            <p className="text-xl text-blue-500 hover:underline cursor-pointer">{book.author_name?.join(', ') || 'Unknown Author'}</p>

            {/* Book Information */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>Categories:</strong> {displayCategories}
              </p>
              <p>
                <strong>Year:</strong> {book.first_publish_year || 'No data available'}
              </p>
              <p>
                <strong>Language:</strong> {book.language?.join(', ') || 'Unknown'}
              </p>
              <p>
                <strong>ISBN:</strong> {book.isbn?.join(', ') || 'No ISBN available'}
              </p>
            </div>

            {/* Additional Information */}
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              <strong>Description:</strong> {book.description || 'No description available.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;












