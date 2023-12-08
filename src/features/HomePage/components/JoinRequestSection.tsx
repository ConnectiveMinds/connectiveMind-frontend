// src/components/JoinRequestSection.tsx
import React from "react";
import JoinRequestItem from "./JoinRequestItem";
import { IJoinRequest, IRequest } from "./JoinRequest";

interface JoinRequestSectionProps {
  isSentRequest: boolean;
  title: string;
  requests: IRequest[];
  onAccept?: (request: IRequest, joinRequest: IJoinRequest) => void;
  onDecline: (request: IRequest, joinRequest: IJoinRequest) => void;
}

const JoinRequestSection: React.FC<JoinRequestSectionProps> = (
  props: JoinRequestSectionProps
) => {
  return (
    <div className="w-full">
      {" "}
      {/* Make the JoinRequestSection full width */}
      <h3 className="text-2xl font-semibold mb-4">{props.title}</h3>
      {props.requests.length != 0 ? (
        props.requests.map((request) => {
          return request.joinRequest.map((joinRequest) => {
            return (
              <JoinRequestItem
                key={joinRequest._id}
                request={request}
                description={
                  props.isSentRequest
                    ? `You Sent Request to join ${request.title}`
                    : `${joinRequest.name} has requested to  join ${request.title}`
                }
                onAccept={
                  props.isSentRequest
                    ? undefined
                    : () => props.onAccept!(request, joinRequest)
                }
                onDecline={() => props.onDecline(request, joinRequest)}
              />
            );
          });
        })
      ) : (
        <div className="text-center">
          <p>No {props.title}</p>
        </div>
      )}
    </div>
  );
};

export default JoinRequestSection;
