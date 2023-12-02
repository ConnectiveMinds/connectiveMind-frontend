import { useEffect } from "react";
import { updatejoinRequest } from "../../services/homepageServices";
import { CustomButton } from "../Button/customButton";
import { SkillCard } from "./skills_card";
import { io } from "socket.io-client";

export interface IProjectCard {
  title: string;
  _id: string;
  ownerId: string;
  description: string;
  skills: string[];
}
export function ProjectCard(props: IProjectCard) {
  const socket = io("http://localhost:3000");
  const handleClick = async () => {
    {
      updatejoinRequest(props._id).then(async (data) => {
        await socket.emit("join_room", props.ownerId);
        await socket.emit("send_request", data["data"]);
      });
    }
  };
  useEffect(() => {
    socket.on("receive_request", (data) => {});
  }, [socket]);
  const skilllist = props.skills.map((skill) => {
    return (
      <li>
        <SkillCard name={skill}></SkillCard>
      </li>
    );
  });
  console.log(skilllist);
  return (
    <div className="max-w-fit max-h-fit bg-white rounded-[10px] border-2 border-zinc-300">
      <div className="p-4">
        <div className="flex flex-row justify-between items-center">
          <div className="w-32 h-7 text-black text-2xl font-normal font-['Inria Serif'] tracking-tight">
            {props.title}
          </div>
          <CustomButton
            text="Join"
            height={8}
            width={32}
            onClick={handleClick}
          ></CustomButton>
        </div>
        <div className="max-w-full max-h-fit bg-gray-200 rounded-lg relative mt-4 p-4 text-black text-base font-normal font-['Inria Serif'] tracking-tight">
          <p>{props.description}</p>
          <div className=" mt-4 flex flex-row items-center">
            <p>Skills Required: </p>
            <ul className="flex flex-row">{skilllist}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
