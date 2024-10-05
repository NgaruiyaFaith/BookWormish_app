import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const book = location.state?.book; // Retrieve book data from location state

  if (!book) return <div className="text-center text-2xl mt-12">No book selected</div>;

  // Limit information to one value to avoid overcrowding
  const displayCategory = book.subjects?.[0] || 'No category available';
  const displayPublisher = book.publisher?.[0] || 'No publisher available';
  const displayISBN = book.isbn?.[0] || 'No ISBN available';
  const displayLanguage = book.language?.[0] || 'Unknown';
  const displayDescription = typeof book.description === 'object' ? book.description?.value : book.description || 'No description available.';

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg max-w-6xl mx-auto mt-12">
      {/* Navigation Path */}
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        <Link to="/" className="text-blue-500 hover:underline">Main</Link> {' | '}
        <span className="text-gray-600 dark:text-gray-300">{book.title}</span>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Book Cover Image */}
        <div className="flex-shrink-0">
          <img
            src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : 'https://via.placeholder.com/150'}
            alt={book.title}
            className="w-60 h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Book Information */}
        <div className="flex flex-col justify-between flex-grow">
          <div>
            {/* Title and Author */}
            <h2 className="text-4xl font-extrabold mb-4 text-gray-800 dark:text-gray-100">
              {book.title}
            </h2>
            <p className="text-xl text-blue-500 mb-6 hover:underline cursor-pointer">{book.author_name?.join(', ') || 'Unknown Author'}</p>

            {/* Book Information */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg text-gray-700 dark:text-gray-300 mb-8">
              <p>
                <strong>Categories:</strong> {displayCategory}
              </p>
              <p>
                <strong>Year:</strong> {book.first_publish_year || 'No data available'}
              </p>
              <p>
                <strong>Language:</strong> {displayLanguage}
              </p>
              <p>
                <strong>Publisher:</strong> {displayPublisher}
              </p>
              <p>
                <strong>ISBN:</strong> {displayISBN}
              </p>
              <p>
                <strong>Pages:</strong> {book.number_of_pages_median || 'No data'}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed mt-6 text-gray-600 dark:text-gray-300">
              <strong>Description:</strong> {displayDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;














