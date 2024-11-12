import React from 'react';
import { Input } from '@/components/ui/input';
import { RxCross2 } from 'react-icons/rx';

const CommonElements = ({ searchQueryTop, setSearchQueryTop, handleSearchTop }) => {
  return (
    <div className="w-full flex items-center justify-between px-4">

      {/* Top Search Bar */}
      <form onSubmit={handleSearchTop} className="flex-grow mx-4">
        <div className="relative flex items-center">
          <Input
            type="text"
            value={searchQueryTop}
            onChange={(e) => setSearchQueryTop(e.target.value)}
            placeholder="Search..."
            className="w-full ml-20 max-w-7xl px-10 py-6 border-2 border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-300 ease-in-out text-lg"
          />
          {/* Cross Icon */}
          <button
            type="button"
            onClick={() => setSearchQueryTop("")}
            className="absolute right-3 top-2 text-gray-600 hover:text-gray-400 transition-all duration-300"
          >
            <RxCross2 size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommonElements;
