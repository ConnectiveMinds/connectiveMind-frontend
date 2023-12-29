import React from "react";
import { IMember } from "../features/HomePage/Interface";
interface IProps {
    idea: IMember | undefined;
    handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
  
  export const Choose: React.FC<IProps> = ({ idea, handleChange }) => {
    return (
      <div className="relative flex flex-col w-full">
        <p>Assigned to:</p>
        <select className="block w-full p-3 border border-gray-300 rounded-sm cursor-pointer focus:outline-none" onChange={handleChange} multiple>
          {idea?.members?.map((member, index) => (
            <option key={index} value={member._id}>
              {member.name}
            </option>
          ))}
        </select>
        
      </div>
    );
  };
  
