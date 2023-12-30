import { useEffect, useState } from "react";
import { TextField } from "../../../Components/TextField/texfield";
import { socket } from "../../../services/socket.services";
import { getmessages, saveChat } from "../../../services/api.services";
import { IChat } from "../Interface";
import { ChatCard } from "../../../Components/Cards/chat_card";

export function ChatSection(props: IChat) {
  const [currentMessage, setMessage] = useState("");
  const [messagelist, setMessageList] = useState<Array<IChat>>([]);
  const [currentUser, setCurrentUser] = useState("");
  useEffect(() => {
    getmessages(props.projectId).then((data) => {
      setMessageList(data["data"]);
    });
    setCurrentUser(JSON.parse(localStorage.getItem("user")!).data.userId);
  }, [messagelist, props.projectId]);

  const handlesendmessage = async () => {
    if (currentMessage != " ") {
      await socket.emit("join_room", props.projectId);
      saveChat(currentMessage, props.projectId).then(async (data) => {
        setMessageList((list) => [...list, data["data"]]);
        await socket.emit("send_message", data["data"]);
        setMessage(" ");
      });
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("heelo");
      setMessageList((list) => [...list, data]);
    });
  }, []);

  return (
    <div className="ml-4 mr-4 mb-10">
<h1 className="pb-10 text-black text-2xl font-bold font-inter"> Chat
      </h1>
      <div className="relative w-[95vh] h-[70vh]">
        <div className="p-3 mt-auto h-[63vh] rounded-lg bg-gray-200 overflow-y-scroll shadow-md">
          {messagelist.map((message) => {
            let issender = false;
            message.senderId?._id === currentUser
              ? (issender = true)
              : (issender = false);
            return (
              <ChatCard
                _id={message.senderId!._id}
                name={message.senderId!.name}
                message={message.message!}
                avatar={""}
                issender={issender}
              ></ChatCard>
            );
          })}
        </div>
        <div className="bottom-4">
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
