// src/pages/JoinRequestPage.tsx
import React, { useEffect, useState } from "react";
import JoinRequestSection from "./JoinRequestSection";
import { NavBar } from "../../../Components/NavBar/navbar";
import {
  getIncomingRequest,
  getSentRequset,
} from "../../../services/request.services";
export interface IRequest {
  ownerId: string;
  title: string;
  joinRequest: IJoinRequest[];
  _id: string;
  name: string;
}
export interface IJoinRequest {
  _id: string;
  name: string;
}

const JoinRequestPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<"sent" | "received">(
    "sent"
  );
  const [sentRequest, setSentRequest] = useState<Array<IRequest>>([]);
  const [receivedRequests, setReceivedRequest] = useState<Array<IRequest>>([]);
  useEffect(() => {
    getIncomingRequest().then((data) => {
      setReceivedRequest(data.data);
    });

    getSentRequset().then((data) => {
      setSentRequest(data.data);
    });
  }, []);
  return (
    <>
      <NavBar
        isHomePage={true}
        isLandingpage={false}
        name={""}
        error={false}
        onChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <div className="max-w-screen-xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg w-full">
        {" "}
        {/* Set max width and make it full width */}
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Join Requests
        </h2>
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setCurrentSection("sent")}
            className={`${
              currentSection === "sent" ? "bg-purple-500" : "bg-gray-300"
            } text-white py-2 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring focus:border-blue-200 hover:shadow-lg hover:transform hover:scale-105 `}
          >
            Sent Requests
          </button>
          <button
            onClick={() => setCurrentSection("received")}
            className={`${
              currentSection === "received" ? "bg-purple-500" : "bg-gray-300"
            } text-white py-2 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring focus:border-green-200 hover:shadow-lg hover:transform hover:scale-105`}
          >
            Received Requests
          </button>
        </div>
        {currentSection === "sent" && (
          <JoinRequestSection
            isSentRequest={true}
            title="Sent Requests"
            requests={sentRequest}
            onAccept={(request) =>
              console.log(`Accepted request for ${request}`)
            }
            onDecline={(request) =>
              console.log(`Declined request for ${request}`)
            }
          />
        )}
        {currentSection === "received" && (
          <JoinRequestSection
            title="Received Requests"
            requests={receivedRequests}
            onAccept={(request) =>
              console.log(`Accepted request from ${request}`)
            }
            onDecline={(request) =>
              console.log(`Declined request from ${request}`)
            }
            isSentRequest={false}
          />
        )}
      </div>
    </>
  );
};

export default JoinRequestPage;
