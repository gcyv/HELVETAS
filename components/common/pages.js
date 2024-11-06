// components/CommonElements.js

import React from 'react';
import { Input } from '@/components/ui/input';
import { RxCross2 } from 'react-icons/rx';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const CommonElements = ({ searchQueryTop, setSearchQueryTop, handleSearchTop }) => {
  return (
    <div className="w-full flex items-center justify-between px-4">
      {/* Navigation Icons */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-800">
          <ArrowLeft size={20} />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <ArrowRight size={20} />
        </button>
      </div>

      {/* Top Search Bar */}
      <form onSubmit={handleSearchTop} className="flex-grow mx-4">
        <div className="relative flex items-center">
          <Input
            type="text"
            value={searchQueryTop}
            onChange={(e) => setSearchQueryTop(e.target.value)}
            placeholder="Search"
            className="w-full ml-8 max-w-7xl px-6 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Cross Icon */}
          <button
            type="button"
            onClick={() => setSearchQueryTop("")}
            className="absolute right-2 top-2 text-gray-600 hover:text-gray-400"
          >
            <RxCross2 size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommonElements;
