// src/components/BookList.jsx
import React from 'react';
import BookCard from './BookCard';
import { useNavigate } from 'react-router-dom';

const BookList = ({ books, onBookSelect }) => {
  const navigate = useNavigate();
  
  const handleBookClick = (book) => {
    if (book && book.key) {
      onBookSelect(book); // Set the selected book in parent
      navigate(`/book${book.key}`); // Navigate to the book details page
    }
  };

  if (!books.length) {
    return <p className="text-center text-gray-600 dark:text-gray-300">No books found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book, index) => (
        <BookCard key={index} book={book} onBookSelect={handleBookClick} />
      ))}
    </div>
  );
};

export default BookList;






