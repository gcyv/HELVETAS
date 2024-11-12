"use client";
import React, { useState } from 'react';

const GrantPage = () => {
  const [showData, setShowData] = useState(false);

  const dummyData = [
    {
      grantID: "GNT-202301",
      title: "Sustainable Agriculture Innovation Grant",
      description: "Funding for projects focused on sustainable farming techniques and innovation in agriculture.",
      fundingAgency: "Green Future Foundation",
      categories: [{ name: "Agriculture", category: "Sustainability" }],
      dateCreated: "2024-01-15",
      submissionDeadline: "2024-06-30",
      budget: "200000 USD",
      url: "https://example.com/grants/sustainable-agriculture",
      status: "open",
      program: "Green Initiatives Program",
      datePosted: "2024-01-16",
      metadata: {
        reference: "GRF-AG-001",
        type: "Grant",
        frameworkProgramme: "Green Future",
        startDate: "2024-08-01",
        callId: "CALL-001",
        enrichedMetadata: "Additional criteria for community-based projects."
      }
    },
    // Add more dummy data entries if needed...
  ];

  const handleHeaderClick = () => {
    setShowData(!showData); // Toggle the visibility of grant data
  };

  return (
    <div className="p-4">
      {/* Header for Innovation Strategy */}
      <h3 
        className="text-lg font-semibold mb-6 cursor-pointer"
        onClick={handleHeaderClick}
      >
        Innovation Strategy
      </h3>

      {/* Conditional rendering of grant details */}
      {showData && (
        <div className="mt-4">
          {dummyData.map((grant) => (
            <div key={grant.grantID} className="p-4 border rounded mb-2">
              <h2>{grant.title}</h2>
              <p>{grant.description}</p>
              <p><strong>Funding Agency:</strong> {grant.fundingAgency}</p>
              <p><strong>Budget:</strong> {grant.budget}</p>
              <p><strong>Status:</strong> {grant.status}</p>
              <p><strong>Deadline:</strong> {grant.submissionDeadline}</p>
              {/* Add other details if needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GrantPage;
