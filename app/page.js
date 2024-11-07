"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Search, CirclePlus, SquareUserRound } from 'lucide-react';

const HomePage = () => {
  const router = useRouter();
  const [searchQueryMiddle, setSearchQueryMiddle] = useState("");
  const [showImages, setShowImages] = useState(false);  // State to control image visibility

  // Array of image URLs
  const organizationImages = [
    "/CNR_Logo_2-copy.jpg",
    "/Baseball_New_Logo.svg",
    "/YDF_Logo.svg",
    "/DPAB-logo.jpg",
    "/KGUMSB_Logo.jpg",
    "/FCBL_Bhutan-copy.jpg"
  ];

  const handleSearchMiddle = (e) => {
    e.preventDefault();
    if (searchQueryMiddle) {
      router.push(`/results?query=${searchQueryMiddle}`);
    }
  };

  const handleIconClick = () => {
    // Toggle the visibility of the images
    setShowImages(!showImages);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-8">

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
          <SquareUserRound
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            size={20}
            onClick={handleIconClick}  // Handle icon click to toggle image visibility
          />
        </div>
      </form>

      {/* Display Organization Images in Circle */}
      {showImages && (
        <div className="my-8 flex space-x-4">
          {organizationImages.map((imageUrl, index) => (
            <img 
              key={index} 
              src={imageUrl} 
              alt={`Organization ${index + 1}`} 
              className="w-10 h-10 rounded-full object-cover"  // Tailwind class for a circular image
            />
          ))}
        </div>
      )}

      {/* Plus Icons Below Middle Search Bar */}
      <div className="flex space-x-9">
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
