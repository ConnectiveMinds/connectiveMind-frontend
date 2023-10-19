import { ReactNode } from "react";

interface ISideBarItems {
  text: string;
  icons?: ReactNode;
}

function SideBarItems(props: ISideBarItems) {
  return (
    <div className="flex flex-row flex-shrink gap-2 pl-4 pt-[10px] items-center">
      {props.icons}
      <div className=" text-black text-lg font-normal font-['Inter']">
        {props.text}
      </div>
    </div>
  );
}
interface ISideBar {
  items: ISideBarItems[];
}
export function SideBar(props: ISideBar) {
  const listitems = props.items.map((item) => {
    return (
      <li>
        <SideBarItems
          icons={
            <svg
              width="13"
              height="18"
              viewBox="0 0 13 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.61 9L0 18V0L12.61 9Z" fill="black" />
            </svg>
          }
          text={item.text}
        />
      </li>
    );
  });
  return (
    <div className="flex flex-col pl-12">
      <div className="w-[195px] h-[17px] pb-10 text-black text-[22px] font-bold font-['Inter']">
        Your Groups
      </div>
      <ul>{listitems}</ul>
    </div>
  );
}
