import { ReactEventHandler } from "react";

interface IButton {
  text: string;
  height: number;
  width: number;
  onClick?: ReactEventHandler;
}
export function CustomButton(props: IButton) {
  const buttonStyle = {
    height: `${props.height}vh`,
    width: `${props.width}vh`,
  };
  return (
    <div>
      <button
        style={buttonStyle}
        className={`text-purple-800  hover:bg-purple-800 hover:text-white text-xs bg-white rounded-[10px] border-2 border-purple-800`}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </div>
  );
}
