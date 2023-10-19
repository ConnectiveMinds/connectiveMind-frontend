interface IButton {
  text: string;
  height: number;
  width: number;
}
export function CustomButton(props: IButton) {
  console.log(`dsfs ${props.height}`);
  return (
    <div>
      <button
        className={`text-purple-800  hover:bg-purple-800 hover:text-white text-xs h-${props.height} w-${props.width}  bg-white rounded-[10px] border-2 border-purple-800`}
        onClick={() => {}}
      >
        {props.text}
      </button>
    </div>
  );
}
