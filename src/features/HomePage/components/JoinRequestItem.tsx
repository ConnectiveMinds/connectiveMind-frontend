import React from "react";
import { IRequest } from "./JoinRequest";

interface JoinRequestItemProps {
  request: IRequest;
  description: string;
  onAccept?: () => void;
  onDecline: () => void;
}

const JoinRequestItem: React.FC<JoinRequestItemProps> = (
  props: JoinRequestItemProps
) => {
  return (
    <div className="bg-white shadow-md p-4 mb-4 flex justify-between items-center transition-all duration-200 hover:shadow-lg hover:transform hover:scale-105">
      <div>
        <p className="text-lg">{props.request.title}</p>
        <p className="text-gray-500">{props.description}</p>{" "}
        {/* Display description */}
      </div>
      <div>
        {props.onAccept && (
          <button
            onClick={props.onAccept}
            className="bg-purple-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-blue-500"
          >
            Accept
          </button>
        )}
        {props.onDecline && (
          <button
            onClick={props.onDecline}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-red-500"
          >
            Decline
          </button>
        )}
      </div>
    </div>
  );
};

export default JoinRequestItem;
