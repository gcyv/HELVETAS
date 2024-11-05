"use client";

// Importing React and useState hook from React
import React, { useState } from 'react';

// Importing UI components and icons
import { Input } from '@/components/ui/input'; // Adjust the import path as needed
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";

const HomePage = () => {
  // State hooks for handling input values
  const [searchQueryTop, setSearchQueryTop] = useState("");
  const [searchQueryMiddle, setSearchQueryMiddle] = useState("");

  // Event handler for the top search bar
  const handleSearchTop = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log("Top Search Query:", searchQueryTop); // Log output for debugging
  };

  // Event handler for the middle search bar
  const handleSearchMiddle = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log("Middle Search Query:", searchQueryMiddle); // Log output for debugging
  };

  // Component layout using Tailwind CSS for styling
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4 sm:space-y-8">
      <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 absolute top-2 sm:top-4">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <FaArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button className="hidden sm:block text-gray-600 hover:text-gray-800">
            <FaArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
        <form onSubmit={handleSearchTop} className="flex-grow mx-2 sm:mx-4">
          <div className="relative flex items-center">
            <Input
              type="text"
              value={searchQueryTop}
              onChange={(e) => setSearchQueryTop(e.target.value)}
              placeholder="Search Bar"
              className="w-full px-3 py-1.5 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-6 sm:py-2"
            />
            <button
              type="button"
              onClick={() => setSearchQueryTop("")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <RxCross2 className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
      <div className="my-4 sm:my-8 pt-8 sm:pt-16">
        <img src="/logo.png" alt="Your Logo" className="w-24 h-30 sm:w-40 sm:h-50" />
      </div>
      <form onSubmit={handleSearchMiddle} className="w-full max-w-md px-4">
        <div className="relative">
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={25} />
          <Input
            type="text"
            value={searchQueryMiddle}
            onChange={(e) => setSearchQueryMiddle(e.target.value)}
            placeholder="Search"
            className="w-full h-10 sm:h-12 pl-8 pr-4 py-2 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {[...Array(6)].map((_, index) => (
          <button key={index} className="text-gray-600 hover:text-gray-800">
            <CiCirclePlus className="w-12 h-12" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage; // Exporting HomePage for use in other parts of the application

