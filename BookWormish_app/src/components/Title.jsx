// src/components/Title.jsx
import React from 'react';

const Title = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl md:text-5xl font-bold">
        {/* Apply the imported font here */}
        <span className="text-teal-500 font-playfair animate-swing" style={{ fontFamily: 'Great Vibes, cursive' }}>
          Book
        </span>
        <span className="text-yellow-500 text-5xl md:text-6xl" style={{ fontFamily: 'Great Vibes, cursive' }}> Wormish</span>
      </h1>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
        “Why did Jane Austen get kicked out of the library? She kept asking if they had ‘Sense and Sensibility.’ … Oh well, why not try searching for it here instead?
      </p>
    </div>
  );
};

export default Title;








