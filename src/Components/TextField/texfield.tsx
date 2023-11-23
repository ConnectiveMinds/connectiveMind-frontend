import { ChangeEvent, ReactNode } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  leadingIcons?: ReactNode;
  precedingIcons?: ReactNode;
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
          size={props.width}
          type={props.type}
          className="pl-10 pr-4 py-2 shadow rounded-xl bg-white shadow-gray-400 focus:outline-none  break-normal w-full"
          placeholder={props.placeholder}
        />
        <div
          className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
        >
          {props.leadingIcons}
        </div>
        <div
          className="absolute inset-y-0 right-0 pl-3 pr-3 
                    flex items-center  
                    pointer-events-none"
        >
          {props.precedingIcons}
        </div>
      </div>
      {props.error && <p className="error">Input filed can't be empty!</p>}
    </div>
  );
}
