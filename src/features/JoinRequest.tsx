// src/pages/JoinRequestPage.tsx
import React, { useState } from 'react';
import JoinRequestSection from '../features/HomePage/components/JoinRequestSection';
import { NavBar } from '../Components/NavBar/navbar';

const JoinRequestPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<'sent' | 'received'>('sent');

  const sentRequests = [
    'Group A',
    'Group B',
    // Add more sent requests
  ];

  const receivedRequests = [
    'User 1',
    'User 2',
    // Add more received requests
  ];

  return (
    <>
    <NavBar isHomePage={false} isLandingpage={false} name={''} error={false} onChange={function (): void {
        throw new Error('Function not implemented.');
      } } />
    
    <div className="max-w-screen-xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg w-full"> {/* Set max width and make it full width */}
      <h2 className="text-2xl font-semibold mb-6 text-center">Join Requests</h2>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setCurrentSection('sent')}
          className={`${
            currentSection === 'sent' ? 'bg-purple-500' : 'bg-gray-300'
          } text-white py-2 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring focus:border-blue-300 hover:shadow-lg hover:transform hover:scale-105 ` }
        >
          Sent Requests
        </button>
        <button
          onClick={() => setCurrentSection('received')}
          className={`${
            currentSection === 'received' ? 'bg-purple-500' : 'bg-gray-300'
          } text-white py-2 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring focus:border-green-300 hover:shadow-lg hover:transform hover:scale-105`}
        >
          Received Requests
        </button>
      </div>
    
      {currentSection === 'sent' && (
        <JoinRequestSection
          title="Sent Requests"
          requests={sentRequests}
          onAccept={(request) => console.log(`Accepted request for ${request}`)}
          onDecline={(request) => console.log(`Declined request for ${request}`)}
        />
      )}

      {currentSection === 'received' && (
        <JoinRequestSection
          title="Received Requests"
          requests={receivedRequests}
          onAccept={(request) => console.log(`Accepted request from ${request}`)}
          onDecline={(request) => console.log(`Declined request from ${request}`)}
        />
      )}
    </div>
    </>
  );
};

export default JoinRequestPage;
