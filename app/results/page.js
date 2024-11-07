"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CommonElements from '@/components/common/pages';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const ResultPage = () => {
  const router = useRouter();
  const [searchQueryTop, setSearchQueryTop] = useState("");

  const handleSearchTop = (e) => {
    e.preventDefault();
    if (searchQueryTop) {
      router.push(`/results?query=${searchQueryTop}`);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen bg-gray-100 pb-16 space-y-8 overflow-x-hidden">
      {/* Common Elements: Top Navigation, Search Bar, and Cross Icon */}
      <div className="absolute top-4 w-full left-6">
        <CommonElements
          searchQueryTop={searchQueryTop}
          setSearchQueryTop={setSearchQueryTop}
          handleSearchTop={handleSearchTop}
        />
      </div>

      {/* Menubar positioned below the search bar */}
      <div className="absolute top-14 left-36 w-full max-w-screen-lg mx-auto">
        <div className="w-full flex justify-between">
          <Menubar className="bg-white shadow-md rounded-md w-full max-w-[16rem]">
            <MenubarMenu>
              <MenubarTrigger>All Time</MenubarTrigger>
              <MenubarContent className="w-48">
                <MenubarItem>Newest</MenubarItem>
                <MenubarItem>Past 24 Hours</MenubarItem>
                <MenubarItem>Past Week</MenubarItem>
                <MenubarItem>Past Month</MenubarItem>
                <MenubarItem>Past Year</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger>Organization</MenubarTrigger>
              <MenubarContent className="w-56">
                <MenubarItem>Druk Holding & Investment</MenubarItem>
                <MenubarItem>Ability Bhutan Society</MenubarItem>
                <MenubarItem>Lhomon Society</MenubarItem>
                <MenubarItem>The Loden Foundation</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>

      {/* Content Section: Search Results, Innovation Strategy */}
      <div className="absolute top-32 left-36 max-w-7xl w-full px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-8">Search Results</h2>
        <h3 className="text-lg font-semibold mb-6">Innovation Strategy</h3>
        <p className="text-gray-700 mb-8 text-m">
          At the heart of the Innovation strategy is the Innovation Ecosystem envisioned to bring together national and global stakeholders committed to driving innovative problem-solving.
        </p>
        <hr className="border-t border-gray-300 mb-8" />
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          FAB23 Bhutan Driving Digital Fabrication in Sustainable Development Through Community-Based Solutions
        </h4>
        <p className="text-gray-700 text-m mb-6">
          Location: Thimphu<br />
          Druk Holding and Investments (DHI), the commercial arm of the Royal Government of Bhutan, in collaboration with Fab Foundation, Center for Bits and Atoms, and Fab City Global Initiative, is hosting the 19th edition of the Fab Lab Conference—the largest digital fabrication event.
        </p>

        {/* Image positioned below the text with margin */}
        <div className="mt-6 flex justify-end">
          <img
            src="/chatbot.webp"
            alt="Event Image"
            className="w-16 h-16 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
