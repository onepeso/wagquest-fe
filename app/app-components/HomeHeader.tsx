import React from 'react';

const HomeHeader = () => {
  return (
<header className="relative bg-cover bg-center w-full py-20 md:py-20 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500"></div>
      <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">Unleash the Adventure</h1>
        <p className="text-base md:text-lg mb-6">
          Explore a world of dog-friendly locations and experiences with PawAdventures. Find the perfect dog parks,
          trails, cafes, and more. Connect with fellow dog owners and embark on new adventures with your furry friend.
        </p>
        <button className="bg-white text-black font-bold py-2 px-6 rounded-md hover:bg-gray-200 transition-colors duration-300">
          We are in Alpha 1.0
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;