/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import { ChatCard } from "../../../Components/Cards/chat_card";
import { TextField } from "../../../Components/TextField/texfield";
import { io } from "socket.io-client";
import { getmessages } from "../../../services/homepageServices";
import axios from "axios";
import { AuthToken, getchat } from "../../../utils/apiroutes";
const socket = io("http://localhost:3000");
interface IChat {
  message: string;
  teamId: string;
  senderId: string;
}

export function ChatSection() {
  const [currentMessage, setMessage] = useState("");
  const [messagelist, setMessageList] = useState<Array<IChat>>([]);

  useEffect(() => {
    getmessages("655f3df9b2d841821f3a38d4").then((data) => {
      setMessageList(data["data"]);
    });
  }, []);

  const handlesendmessage = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    await socket.emit("join_room", "23");
    if (currentMessage != "") {
      const messageData = {
        message: currentMessage,
        senderId: "64eb17f7fd2129889d14983d",
        teamId: "655f3df9b2d841821f3a38d4",
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setMessage("");
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      if (data.success) {
        setMessageList((list) => [...list, data]);
      }
    });
  }, [socket]);

  return (
    <div className="ml-8 mr-8">
      <h1 className=" h-[17px] pb-10 text-black text-[22px] font-bold font-['Inter']">
        Chat
      </h1>
      <div className="relative">
        <div className="p-3 box-content mt-auto h-[800px] w-[1000px] rounded-lg bg-gray-400 overflow-y-scroll">
          {messagelist.map((message) => {
            let issender = false;
            message.senderId === "sfdfs"
              ? (issender = true)
              : (issender = false);
            return (
              <ChatCard
                username={message.senderId}
                message={message.message}
                avatar={""}
                issender={issender}
              ></ChatCard>
            );
          })}
        </div>
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
            value={currentMessage}
            name={""}
            placeholder={"Write Message Here"}
            error={false}
            width={104}
            height={12}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              setMessage(e.target.value);
            }}
            onSubmit={handlesendmessage}
          ></TextField>
        </div>
      </div>
    </div>
  );
}
