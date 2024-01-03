export interface IChatCard {
  _id: string;
  name: string;
  message: string;
  avatar?: string;
  issender: boolean;
}
export function ChatCard(props: IChatCard) {
  const sender = props.issender ? "flex flex-row-reverse" : "flex flex-row";
  const bgcolor = props.issender ? " bg-blue-600" : " bg-white";
  return (
    <div className={sender}>
      <div
        className={
          "mt-3  h-4 md:h-8 lg:h-12 rounded-full  text-center" + bgcolor
        }
      >
        <img
          src="public\avatar.png"
          className="h-4 md:h-8 lg:h-12 rounded-full"
        />
        {/* <img src={`data:image/svg+xml;base64,${props.avatar}`} alt="img"   /> */}
      </div>
      <div className="mt-1 ml-6 mr-6 flex-1 ">
        <p className=" text-black text-sm">
          {props.issender ? "" : props.name}
        </p>
        <div
          className={
            " mt-1 p-2 break-normal rounded-lg max-h-fit font-normal w-[75%]" +
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
