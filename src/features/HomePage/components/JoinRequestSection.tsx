// src/components/JoinRequestSection.tsx
import React from "react";
import JoinRequestItem from "./JoinRequestItem";
import { IRequest } from "./JoinRequest";

interface JoinRequestSectionProps {
  title: string;
  requests: IRequest[];
  onAccept: (request: IRequest) => void;
  onDecline: (request: IRequest) => void;
}

const JoinRequestSection: React.FC<JoinRequestSectionProps> = (
  props: JoinRequestSectionProps
) => {
  return (
    <div className="w-full">
      {" "}
      {/* Make the JoinRequestSection full width */}
      <h3 className="text-2xl font-semibold mb-4">{props.title}</h3>
      {props.requests.map((request) => {
        return request.joinRequest.map((joinRequest) => {
          return (
            <JoinRequestItem
              key={request._id}
              request={joinRequest}
              description={`${joinRequest.email} has requested join ${request.title}`}
              onAccept={
                props.title === "Received Requests"
                  ? () => props.onAccept(request)
                  : undefined
              }
              onDecline={() => props.onDecline(request)}
            />
          );
        });
      })}
    </div>
  );
};

export default JoinRequestSection;
