"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CommonElements from '@/components/common/pages';
import { Input } from '@/components/ui/input';
import { Search, CirclePlus, SquareUserRound } from 'lucide-react';

const HomePage = () => {
  const router = useRouter();
  const [searchQueryTop, setSearchQueryTop] = useState("");
  const [searchQueryMiddle, setSearchQueryMiddle] = useState("");

  const handleSearchTop = (e) => {
    e.preventDefault();
    if (searchQueryTop) {
      router.push(`/results?query=${searchQueryTop}`);
    }
  };

  const handleSearchMiddle = (e) => {
    e.preventDefault();
    if (searchQueryMiddle) {
      router.push(`/results?query=${searchQueryMiddle}`);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-8">
      {/* Common Elements: Top Navigation, Search Bar, and Cross Icon */}
      <div className="absolute top-4 w-full">
        <CommonElements
          searchQueryTop={searchQueryTop}
          setSearchQueryTop={setSearchQueryTop}
          handleSearchTop={handleSearchTop}
        />
      </div>

      {/* Logo Placeholder */}
      <div className="my-8 pt-16">
        <img src="/logo.png" alt="Your Logo" className="w-40 h-50" />
      </div>

      {/* Middle Search Bar with Search and SquareUserRound Icons */}
      <form onSubmit={handleSearchMiddle} className="w-full max-w-xl px-4">
        <div className="relative">
          {/* Search Icon */}
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800" size={20} />
          <Input
            type="text"
            value={searchQueryMiddle}
            onChange={(e) => setSearchQueryMiddle(e.target.value)}
            placeholder="Search"
            className="w-full max-w-5xl h-12 pl-10 pr-10 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* SquareUserRound Icon */}
          <SquareUserRound className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800" size={20} />
        </div>
      </form>

      {/* Plus Icons Below Middle Search Bar */}
      <div className="flex space-x-6">
        {[...Array(6)].map((_, index) => (
          <button key={index} className="text-gray-500 hover:text-gray-800">
            <CirclePlus size={40} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;