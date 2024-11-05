"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const HomePage = () => {
  const [searchQueryTop, setSearchQueryTop] = useState("");
  const [searchQueryMiddle, setSearchQueryMiddle] = useState("");

  const handleSearchTop = (e) => {
    e.preventDefault();
    console.log("Top Search Query:", searchQueryTop);
  };

  const handleSearchMiddle = (e) => {
    e.preventDefault();
    console.log("Middle Search Query:", searchQueryMiddle);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-8">
      {/* Container for icons and search bar */}
      <div className="absolute top-4 left-4 flex items-center space-x-4">
        {/* Icons for navigation */}
        <button className="text-gray-600 hover:text-gray-800">
          <FaArrowLeft size={20} />
        </button>
        <button className="text-gray-600 hover:text-gray-800">
          <FaArrowRight size={20} />
        </button>

        {/* Top Search Bar */}
        <form onSubmit={handleSearchTop} className="flex flex-grow">
          <div className="relative w-full max-w-6xl flex items-center"> {/* Keep the max-w-6xl for the search bar */}
            <Input
              type="text"
              value={searchQueryTop}
              onChange={(e) => setSearchQueryTop(e.target.value)}
              placeholder="Top Search Bar"
              className="w-full max-w-6xl px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Icon beside input */}
            <button
              type="button"
              onClick={() => setSearchQueryTop("")}
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              <RxCross2 size={20} />
            </button>
          </div>
        </form>
      </div>

      {/* Logo Placeholder */}
      <div className="my-8 pt-16"> {/* Add padding to create space for top search bar */}
        <img src="/logo.png" alt="Your Logo" className="w-40 h-50" />
      </div>

      {/* Middle Search Bar */}
      <form onSubmit={handleSearchMiddle} className="w-full max-w-md px-4">
        <Input
          type="text"
          value={searchQueryMiddle}
          onChange={(e) => setSearchQueryMiddle(e.target.value)}
          placeholder="Search"
          className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
    </div>
  );
};

export default HomePage;
