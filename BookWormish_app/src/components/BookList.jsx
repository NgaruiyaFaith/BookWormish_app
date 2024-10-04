// src/components/BookList.jsx
import React, { useState } from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onBookSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  const totalPages = Math.ceil(books.length / booksPerPage);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  if (!books.length) {
    return <p className="text-center text-gray-600 dark:text-gray-300">No books found.</p>;
  }

  return (
    <div>
      <div className="space-y-4">
        {currentBooks.map((book, index) => (
          <BookCard key={index} book={book} onBookSelect={onBookSelect} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-teal-500 text-white hover:bg-teal-600'
            } transition-colors duration-300`}
          >
            Previous
          </button>
          <span className="self-center text-gray-700 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-teal-500 text-white hover:bg-teal-600'
            } transition-colors duration-300`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BookList;




