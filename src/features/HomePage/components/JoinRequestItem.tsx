// src/components/JoinRequestItem.tsx
import React from 'react';

interface JoinRequestItemProps {
  message: string;
  description: string; 
  onAccept?: () => void;
  onDecline: () => void;
}

const JoinRequestItem: React.FC<JoinRequestItemProps> = ({ message, description, onAccept, onDecline }) => {
  return (
    <div className="bg-white shadow-md p-4 mb-4 flex justify-between items-center transition-all duration-200 hover:shadow-lg hover:transform hover:scale-105">
      <div>
        <p className="text-lg">{message}</p>
        <p className="text-gray-500">{description}</p> {/* Display description */}
      </div>
      <div>
      {onAccept && (
          <button onClick={onAccept} className="bg-purple-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-blue-500">
            Accept
          </button>
        )}
        {onDecline && (
          <button onClick={onDecline} className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-red-500">
            Decline
          </button>
        )}
      </div>
    </div>
  );
};

export default JoinRequestItem;
