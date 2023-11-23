/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from "react";
import { ChatCard } from "../../../Components/Cards/chat_card";
import { TextField } from "../../../Components/TextField/texfield";

export function ChatSection() {
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  return (
    <div className="ml-8 mr-8">
      <h1 className=" h-[17px] pb-10 text-black text-[22px] font-bold font-['Inter']">
        Chat
      </h1>
      <div className="p-3 box-content mt-auto h-screen w-[1000px] rounded-lg relative bg-gray-400">
        <ChatCard
          username={"Sudip Bhattarai"}
          message={
            "I am Sudip Bhattarai I am Sudip BhattaraiI am Sudip BhattaraiI am Sudip BhattaraiI am Sudip BhattaraiI am Sudip BhattaraiI am Sudip BhattaraiI am Sudip BhattaraiI am Sudip Bhattarai"
          }
          avatar={""}
          issender={true}
        ></ChatCard>
        <ChatCard
          username={"Sudip Bhattarai"}
          message={
            "I am Sudip Bhattarai I am Sudip BhattaraiI am Sudip BhattaraiI am Sudip BhattaraiI am Sudip BhattaraiI am Sudip BhattaraiI am Sudip BhattaraiI am Sudip BhattaraiI am Sudip Bhattarai"
          }
          avatar={""}
          issender={false}
        ></ChatCard>
        <div className="absolute bottom-4 left-10 right-10">
          <TextField
            precedingIcons={
              <svg
                width="40"
                height="43"
                viewBox="0 0 40 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.308 21.0373L15.09 14.1163C14.291 13.698 13.3333 14.2775 13.3333 15.1794V28.667C13.3333 29.5689 14.291 30.1484 15.09 29.7301L28.308 22.8091C29.0229 22.4348 29.0229 21.4116 28.308 21.0373Z"
                  stroke="#222222"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            type={"text"}
            label={""}
            value={""}
            name={""}
            placeholder={"Write Message Here"}
            error={false}
            width={104}
            height={12}
            onChange={() => {}}
          ></TextField>
        </div>
      </div>
    </div>
  );
}
