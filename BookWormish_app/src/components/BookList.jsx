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

  // Change the container to flex-column layout for list format
  return (
    <div className="flex flex-col gap-4">
      {books.map((book, index) => (
        <BookCard key={index} book={book} onBookSelect={handleBookClick} />
      ))}
    </div>
  );
};

export default BookList;






