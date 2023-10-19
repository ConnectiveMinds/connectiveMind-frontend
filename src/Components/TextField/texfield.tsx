import { ChangeEvent, ReactNode } from "react";
import { Form } from "react-router-dom";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  leadingIcons?: ReactNode;
  label: string;
  value: string | number;
  name: string;
  placeholder: string;
  error: boolean;
  disabled?: boolean;
  width: number;
  height: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function TextField(props: InputProps) {
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          className="pl-10 pr-4 py-2 shadow rounded-xl bg-white shadow-gray-400 w-80 focus:outline-none"
          placeholder="Search"
        />
        <div
          className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
        >
          {props.leadingIcons}
        </div>
      </div>
      {props.error && <p className="error">Input filed can't be empty!</p>}
    </div>
  );
}
