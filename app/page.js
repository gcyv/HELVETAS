"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";

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
      <div className="flex items-center justify-between w-full px-4 absolute top-4">
        {/* Icons for navigation */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">
            <FaArrowLeft size={20} />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <FaArrowRight size={20} />
          </button>
        </div>

        {/* Top Search Bar */}
        <form onSubmit={handleSearchTop} className="flex-grow mx-4">
          <div className="relative flex items-center">
            <Input
              type="text"
              value={searchQueryTop}
              onChange={(e) => setSearchQueryTop(e.target.value)}
              placeholder="Search Bar"
              className="w-full ml-8 max-w-7xl px-6 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Cross Icon at the top right of the input */}
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

      {/* Logo Placeholder */}
      <div className="my-8 pt-16"> {/* Add padding to create space for top search bar */}
        <img src="/logo.png" alt="Your Logo" className="w-40 h-50" />
      </div>

      {/* Middle Search Bar with Search Icon */}
      <form onSubmit={handleSearchMiddle} className="w-full max-w-md px-4">
        <div className="relative">
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={25} /> 
          <Input
            type="text"
            value={searchQueryMiddle}
            onChange={(e) => setSearchQueryMiddle(e.target.value)}
            placeholder="Search"
            className="w-full max-w-5xl h-12 pl-10 pr-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>

      {/* Plus Icons Below Middle Search Bar */}
      <div className="flex space-x-4">
        {[...Array(6)].map((_, index) => (
          <button key={index} className="text-gray-600 hover:text-gray-800">
            <CiCirclePlus size={50} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
