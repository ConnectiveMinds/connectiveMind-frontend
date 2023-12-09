/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

interface TeamMemberTileProps {
  id: string;
  memberName: string;
  ownerId: string;
  loggedInUserId: string;
  groupId: string;
  onRemove?: () => void;
}

const TeamMemberTile: React.FC<TeamMemberTileProps> = ({
  id,
  memberName,
  ownerId,
  loggedInUserId,
  groupId,
  onRemove,
}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRemoveClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmation = (confirmed: boolean) => {
    if (confirmed) {

      if (onRemove) {
        onRemove();
      }
    }
    setShowConfirmation(false);
  };

  return (
    <div className="bg-white shadow-md p-4 mb-4 md:mx-10 mx-4 sm:mx-2 flex justify-between items-center transition-all duration-200 hover:shadow-lg hover:transform hover:scale-105">
      <div>
        <p className="text-lg">{memberName}</p>
        {(ownerId === loggedInUserId && id === loggedInUserId) && <p className="text-gray-500">Owner</p>}
      </div>
      <div>
        {(ownerId === loggedInUserId && loggedInUserId !== id)&& (
          <>
            <button
              onClick={handleRemoveClick}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Remove
            </button>
            {showConfirmation && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-md border border-black shadow-md">
                <p>{`Are you sure about removing ${memberName} from the group?`}</p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => handleConfirmation(true)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mr-2"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleConfirmation(false)}
                    className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
            
            )}

          </>
        )}
        {(loggedInUserId === id && ownerId !== loggedInUserId)&& (
          <>
            <button
              onClick={handleRemoveClick}
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Leave
            </button>
            {showConfirmation && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-md border border-black shadow-md">
                <p>{`Are you sure you want to leave this group?`}</p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => handleConfirmation(true)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mr-2"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleConfirmation(false)}
                    className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
            
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TeamMemberTile;
