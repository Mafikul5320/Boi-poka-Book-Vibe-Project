import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-900">Book Vibe</div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <a href="#" className="text-green-600 font-semibold border border-green-500 px-4 py-1.5 rounded-md hover:bg-green-50 transition">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-black transition">Listed Books</a>
        <a href="#" className="text-gray-700 hover:text-black transition">Pages to Read</a>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-3">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
          Sign In
        </button>
        <button className="bg-sky-400 text-white px-4 py-2 rounded-md hover:bg-sky-500 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
