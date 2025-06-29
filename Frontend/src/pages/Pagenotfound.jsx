import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertCircle } from 'react-icons/fi';

const Pagenotfound = () => {
  return (
    <div className=" flex items-center justify-center bg-gradient-to-r  px-4">
      <div className="text-center max-w-lg bg-white shadow-xl rounded-2xl p-10 border border-gray-200">
        <FiAlertCircle className="text-red-500 text-5xl mx-auto mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">404 - Page Not Found</h1>
        <p className="text-gray-500 text-base mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="bg-sky-400 hover:bg-sky-600 text-white px-6 py-2 rounded-xl text-base font-medium transition duration-200"
        >
          🔙 Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Pagenotfound;
