import React from 'react';

const BookDetails = ({ book }) => {
  if (!book) return <div>No book selected</div>;

  // Simplify display information and limit to prevent overflow
  const displayCategories = book.subjects?.slice(0, 2).join(', ') || 'No categories available';
  const displayPublishers = book.publisher?.slice(0, 1).join(', ') || 'No publisher available';
  const displayISBN = book.isbn?.slice(0, 1).join(', ') || 'No ISBN available';
  const displayLanguage = book.language?.slice(0, 1).join(', ') || 'Unknown';

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

            {/* Rating */}
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">⭐</span>
              <span className="ml-1 text-gray-700 dark:text-gray-300">5.0 / 5.0</span>
              <span className="ml-4 text-gray-500 dark:text-gray-400">0 comments</span>
              <span className="ml-4 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-red-500">❤️</span>
            </div>

            {/* Book Information */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p>
                <strong>Categories:</strong> {displayCategories}
              </p>
              <p>
                <strong>Year:</strong> {book.first_publish_year || 'No data available'}
              </p>
              <p>
                <strong>Language:</strong> {displayLanguage}
              </p>
              <p>
                <strong>ISBN 10:</strong> {displayISBN}
              </p>
              <p>
                <strong>Pages:</strong> {book.number_of_pages_median || 'No data'}
              </p>
              <p>
                <strong>Publisher:</strong> {displayPublishers}
              </p>
              <p>
                <strong>ISBN 13:</strong> {book.isbn?.join(', ') || 'No ISBN available'}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow transition">
              🔒 Premium Needed
            </button>
            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg shadow transition">
              💾 Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;











