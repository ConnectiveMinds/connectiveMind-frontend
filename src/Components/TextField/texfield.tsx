import { ChangeEvent, ReactEventHandler, ReactNode } from "react";

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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: ReactEventHandler;
}

export function TextField(props: InputProps) {
  const paddingRight = props.precedingIcons ? `${props.precedingIcons.toString().length * 3}px` : '3rem';

  return (
    <div>
      <div className="relative overflow-x-clip overflow-y-scroll">
        <input
          value={props.value}
          onChange={props.onChange}
          size={props.width}
          type={props.type}
          className="pl-10 pr-4 py-2 shadow rounded-xl bg-white shadow-gray-400 focus:outline-none  break-normal w-full"
          placeholder={props.placeholder}
          style={{paddingRight}}
        />
        <div
          className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  "
        >
          {props.leadingIcons}
        </div>
        <div
          className="absolute inset-y-0 right-0 pl-3 pr-3 
                    flex items-center  
                    "
          onClick={props.onSubmit}
        >
          {props.precedingIcons}
        </div>
      </div>
      {props.error && <p className="error">Input filed can't be empty!</p>}
    </div>
  );
}
