"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CommonElements from '@/components/common/pages';
import {
  Pagination,
  PaginationContent,
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
import { Input, Button } from "@/components/ui/input";
import { RxCross2 } from 'react-icons/rx';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const ResultPage = () => {
  const router = useRouter();
  const [searchQueryTop, setSearchQueryTop] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [userQuestion, setUserQuestion] = useState(""); // User's question
  const [messages, setMessages] = useState([]); // Store messages for chat
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [rowsPerPage, setRowsPerPage] = useState(10); // Rows per page state
  const [totalPages, setTotalPages] = useState(1); // Total pages state
  const [results, setResults] = useState([]); // Simulated search results

  // Simulate fetching search results (replace with real API data)
  useEffect(() => {
    const fetchData = () => {
      // Mock data for demonstration purposes
      const mockResults = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        title: `Innovation Strategy ${index + 1}`,
        description: `At the heart of the Innovation strategy is the Innovation Ecosystem envisioned to bring together national and global stakeholders committed to driving innovative problem-solving for result ${index + 1}.`,
      }));
      setResults(mockResults);
      setTotalPages(Math.ceil(mockResults.length / rowsPerPage));
    };
    fetchData();
  }, [rowsPerPage]);

  const handleSearchTop = (e) => {
    e.preventDefault();
    if (searchQueryTop) {
      router.push(`/results?query=${searchQueryTop}`);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to the first page
  };

  const handleImageClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleQuestionChange = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleAskQuestion = () => {
    if (userQuestion.trim() !== "") {
      const newMessages = [
        ...messages,
        { type: "user", text: userQuestion },
        { type: "bot", text: "This is a mock answer from the chatbot." },
      ];
      setMessages(newMessages);
      setUserQuestion("");
    }
  };

  // Calculate the displayed results based on pagination
  const indexOfLastResult = currentPage * rowsPerPage;
  const indexOfFirstResult = indexOfLastResult - rowsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const getDisplayedPageNumbers = () => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage === 1) {
        pages.push(1, 2, 3);
      } else if (currentPage === totalPages) {
        pages.push(totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
      }
    }
    return pages;
  };

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen bg-white pb-16 space-y-8 overflow-x-hidden">
      {/* Fixed Navigation Bar */}
      <div className="w-full bg-[#003366] text-white py-4 px-6 fixed top-0 left-0 flex justify-between items-center shadow-md z-50">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav className="flex space-x-6">
          <button onClick={() => router.push('/')} className="hover:underline">Home</button>
        </nav>
      </div>

      {/* Common Elements: Top Navigation, Search Bar, and Cross Icon */}
      <div className="absolute top-20 w-full left-6">
        <CommonElements
          searchQueryTop={searchQueryTop}
          setSearchQueryTop={setSearchQueryTop}
          handleSearchTop={handleSearchTop}
        />
      </div>

      {/* Content Section: Search Results */}
      <div className="absolute top-44 left-36 max-w-7xl w-full px-6 py-8 bg-white shadow-lg rounded-lg">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-[#003366]">Search Results</h2>

          {/* Pagination Component aligned to the top right */}
          <div className="flex items-center justify-end space-x-4">
            <Pagination className="flex justify-center items-center space-x-3">
              <PaginationPrevious
                className="px-4 py-2 bg-[#003366] text-white rounded-lg shadow-md cursor-pointer hover:bg-[#a23f33] hover:text-white transition-all duration-300 ease-in-out"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </PaginationPrevious>

              <PaginationContent className="flex space-x-2">
                {getDisplayedPageNumbers().map((pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      className={`px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ease-in-out ${
                        currentPage === pageNumber
                          ? 'bg-[#003366] text-white'
                          : 'bg-gray-200 text-[#003366] hover:bg-blue-100'
                      }`}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </PaginationContent>

              <PaginationNext
                className="px-4 py-2 bg-[#003366] text-white rounded-lg shadow-md cursor-pointer hover:bg-[#a23f33] hover:text-white transition-all duration-300 ease-in-out"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </PaginationNext>
            </Pagination>
          </div>
        </div>

        {/* Display the current results */}
        {currentResults.map((result) => (
          <div key={result.id} className="mb-8">
            <h3 className="text-lg font-semibold mb-6 text-[#003366]">{result.title}</h3>
            <p className="text-[#003366] mb-8 text-m">{result.description}</p>
            <hr className="border-t border-gray-300 mb-8" />
          </div>
        ))}

        {/* Rows per page and Pagination section at the bottom right */}
        <div className="absolute bottom-4 right-4 flex items-center space-x-4">
          {/* Rows per page dropdown */}
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium text-[#003366] whitespace-nowrap">Rows per page</p>
            <Select onValueChange={(value) => handleRowsPerPageChange(Number(value))}>
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={rowsPerPage} />
              </SelectTrigger>
              <SelectContent side="top">
                {[5, 10, 15, 20].map((size) => (
                  <SelectItem key={size} value={size} className="text-[#003366]">
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Pagination Component at the bottom right */}
          <Pagination className="flex justify-center items-center space-x-3">
            <PaginationPrevious
              className="px-4 py-2 bg-[#003366] text-white rounded-lg shadow-md cursor-pointer hover:bg-[#a23f33] hover:text-white transition-all duration-300 ease-in-out"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </PaginationPrevious>

            <PaginationContent className="flex space-x-2">
              {getDisplayedPageNumbers().map((pageNumber) => (
                <PaginationItem key={pageNumber}>
                  <PaginationLink
                    className={`px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ease-in-out ${
                      currentPage === pageNumber
                        ? 'bg-[#003366] text-white'
                        : 'bg-gray-200 text-[#003366] hover:bg-blue-100'
                    }`}
                    onClick={() => handlePageChange(pageNumber)}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>

            <PaginationNext
              className="px-4 py-2 bg-[#003366] text-white rounded-lg shadow-md cursor-pointer hover:bg-[#a23f33] hover:text-white transition-all duration-300 ease-in-out"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </PaginationNext>
          </Pagination>
        </div>
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
            <div className="flex flex-col space-y-4 h-full pt-8">
              {/* Messages List */}
              <div className="flex-1 overflow-y-auto space-y-2">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} space-x-2`}
                  >
                    <div
                      className={`p-2 max-w-xs rounded-lg ${message.type === 'user' ? 'bg-[#003366] text-white' : 'bg-gray-200 text-gray-800'}`}
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
                  className="px-4 py-2 bg-[#003366] text-white rounded-md hover:bg-[#002244] transition-all duration-300"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
