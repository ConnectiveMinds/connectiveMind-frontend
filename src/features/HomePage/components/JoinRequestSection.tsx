// src/components/JoinRequestSection.tsx
import React from 'react';
import JoinRequestItem from './JoinRequestItem';

interface JoinRequestSectionProps {
  title: string;
  requests: string[];
  onAccept: (request: string) => void;
  onDecline: (request: string) => void;
}

const JoinRequestSection: React.FC<JoinRequestSectionProps> = ({ title, requests, onAccept, onDecline }) => {
  return (
    <div className="w-full"> {/* Make the JoinRequestSection full width */}
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      {requests.map((request, index) => (
        <JoinRequestItem
          key={index}
          message={request}
          description={`Description for ${request}`}
          onAccept={() => onAccept(request)}
          onDecline={() => onDecline(request)}
        />
      ))}
    </div>
  );
};

export default JoinRequestSection;
