import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

const DataNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 py-16 bg-white rounded-2xl shadow-lg border border-gray-200">
      <BiSearchAlt className="text-6xl text-gray-400 mb-4 animate-bounce" />
      <h2 className="text-2xl font-bold text-gray-700 mb-2">Data Not Found</h2>
      <p className="text-gray-500 text-sm">
        Sorry, we couldn’t find any matching data. Please try again with different criteria.
      </p>
    </div>
  );
};

export default DataNotFound;
