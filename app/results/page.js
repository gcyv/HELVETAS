"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import CommonElements from '@/components/common/pages';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Input } from "@/components/ui/input";
import { RxCross2 } from 'react-icons/rx';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const ResultPage = () => {
  const router = useRouter();
  const [searchQueryTop, setSearchQueryTop] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [userQuestion, setUserQuestion] = useState(""); // User's question
  const [messages, setMessages] = useState([]); // Store messages for chat
  

  const handleSearchTop = (e) => {
    e.preventDefault();
    if (searchQueryTop) {
      router.push(`/results?query=${searchQueryTop}`);
    }
  };

  const handleImageClick = () => {
    setIsModalOpen((prev) => !prev); // Toggle the modal state
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleQuestionChange = (e) => {
    setUserQuestion(e.target.value); // Update user's question
  };

  const handleAskQuestion = () => {
    // Mocked answer (replace with your own logic for real answers)
    const answer = "This is a mock answer from the chatbot.";

    // Add the user's question and the mock answer to the messages array
    setMessages([ 
      ...messages, 
      { type: 'user', text: userQuestion }, 
      { type: 'bot', text: answer }, 
    ]);
    setUserQuestion(""); // Clear the question
  };

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen bg-white pb-16 space-y-8 overflow-x-hidden">
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
          <Menubar className="bg-white shadow-md rounded-md w-full max-w-[14rem]">
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
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">Search Results</h2>

          {/* Pagination Component aligned to the top right */}
          <div className="flex items-center justify-end space-x-4">
            <Pagination className="flex justify-center items-center space-x-3">
              <PaginationPrevious className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out">
                Previous
              </PaginationPrevious>

              <PaginationContent className="flex space-x-2">
                <PaginationItem>
                  <PaginationLink className="px-3 py-2 bg-gray-200 rounded-lg text-gray-800 cursor-pointer hover:bg-blue-100 transition-all duration-200 ease-in-out">
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="px-3 py-2 bg-gray-200 rounded-lg text-gray-800 cursor-pointer hover:bg-blue-100 transition-all duration-200 ease-in-out">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink className="px-3 py-2 bg-gray-200 rounded-lg text-gray-800 cursor-pointer hover:bg-blue-100 transition-all duration-200 ease-in-out">
                    ...
                  </PaginationLink>
                </PaginationItem>
              </PaginationContent>

              <PaginationNext className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out">
                Next
              </PaginationNext>
            </Pagination>
          </div>
        </div>

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
        <hr className="border-t border-gray-300 mb-8" />
        <h3 className="text-lg font-semibold mb-6">Innovation Strategy</h3>
        <p className="text-gray-700 mb-8 text-m">
          At the heart of the Innovation strategy is the Innovation Ecosystem envisioned to bring together national and global stakeholders committed to driving innovative problem-solving.
        </p>
        <hr className="border-t border-gray-300 mb-8" />
        <h3 className="text-lg font-semibold mb-6">Innovation Strategy</h3>
        <p className="text-gray-700 mb-8 text-m">
          At the heart of the Innovation strategy is the Innovation Ecosystem envisioned to bring together national and global stakeholders committed to driving innovative problem-solving.
        </p>
        <hr className="border-t border-gray-300 mb-8" />
          {/* Rows per page and Pagination section */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-4">
          {/* Rows per page dropdown */}
          <div className="flex items-center space-x-2">
          <p className="text-sm font-medium whitespace-nowrap">Rows per page</p>
        <Select
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue/>
          </SelectTrigger>
          <SelectContent side="top">
            {[5, 10, 15, 20].map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
          </div>

          {/* Pagination */}
          <Pagination className="flex justify-center items-center space-x-3">
            <PaginationPrevious className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out">
              Previous
            </PaginationPrevious>

            <PaginationContent className="flex space-x-2">
              <PaginationItem>
                <PaginationLink className="px-3 py-2 bg-gray-200 rounded-lg text-gray-800 cursor-pointer hover:bg-blue-100 transition-all duration-200 ease-in-out">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="px-3 py-2 bg-gray-200 rounded-lg text-gray-800 cursor-pointer hover:bg-blue-100 transition-all duration-200 ease-in-out">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink className="px-3 py-2 bg-gray-200 rounded-lg text-gray-800 cursor-pointer hover:bg-blue-100 transition-all duration-200 ease-in-out">
                  ...
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>

            <PaginationNext className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-600 transition-all duration-300 ease-in-out">
              Next
            </PaginationNext>
          </Pagination>
        </div>
        
        
        {/* Image positioned at the bottom-right corner fixed */}
        <div className="fixed bottom-4 right-6 w-16 h-16">
          <img
            src="/chatbot.webp"
            alt="Event Image"
            className="w-full h-full rounded-full cursor-pointer"
            onClick={handleImageClick} // Open modal on click
          />

          {/* Modal Popover */}
          {isModalOpen && (
  <div className="absolute bottom-20 right-0 w-[480px] p-6 bg-white shadow-lg rounded-lg z-50 overflow-y-auto h-[555px]">
    {/* Close Button */}
    <button
      onClick={handleModalClose}
      className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800"
    >
      <RxCross2 size={24} />
    </button>
    
    {/* Chat UI */}
    <div className="flex flex-col space-y-4 h-full pt-8"> {/* Added padding-top to ensure no overlap */}
      {/* Messages List */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} space-x-2`}
          >
            <div
              className={`p-2 max-w-xs rounded-lg ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Question Input and Button in a Row */}
      <div className="flex space-x-2 w-full">
        <Input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-md"
          placeholder="Type your question here"
          value={userQuestion}
          onChange={handleQuestionChange}
        />
        <button
          onClick={handleAskQuestion}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
        >
          Send
        </button>
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default ResultPage;  
