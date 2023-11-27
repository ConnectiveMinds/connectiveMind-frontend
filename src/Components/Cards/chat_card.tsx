export interface IChatCard {
  username: string;
  message: string;
  avatar: string;
  issender: boolean;
}
export function ChatCard(props: IChatCard) {
  const sender = props.issender ? "flex flex-row-reverse" : "flex flex-row";
  const bgcolor = props.issender ? " bg-blue-600" : " bg-white";
  return (
    <div className={sender}>
      <div
        className={
          "mt-4 md:w-10 lg:w-14 h-4 md:h-10 lg:h-14 rounded-full  text-center" +
          bgcolor
        }
      >
        <img src={`data:image/svg+xml;base64,${props.avatar}`} alt="Image" />
      </div>
      <div className="mt-2 ml-6 mr-6 flex-1 ">
        <p className=" text-white text-sm">
          {props.issender ? "" : props.username}
        </p>
        <div
          className={
            "p-2 break-normal rounded-lg max-h-fit font-normal w-[75%]" +
            (props.issender ? " ml-auto text-white" : " mr-auto") +
            bgcolor
          }
        >
          <p className="">{props.message}</p>
        </div>
      </div>
    </div>
  );
}
