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
        “Remember that scene where Mr. Darcy almost confesses his love but then just… walks away awkwardly? 
        Yeah, if you have no idea what I’m talking about, type ‘Pride and Prejudice’ and hit search. Trust me!”
      </p>
    </div>
  );
};

export default Title;







