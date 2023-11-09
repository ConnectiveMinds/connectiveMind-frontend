import { ChangeEvent } from "react";
import { TextField } from "../TextField/texfield";

interface INavBarProps {
  isHomePage: boolean;
  isLandingpage: boolean;
  name: string | number;
  error: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export function NavBar(props: INavBarProps) {
  return (
    <nav className="flex flex-row justify-between items-center p-2">
      <img
        className="w-8 md:w-16 lg:w-32 ml-4 md:ml-8 lg:ml-12 h-8 md:h-16 lg:h-28"
        src="src/Data/Connective 1.png"
      />
      <>
        <div className="text-base flex gap-12">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Home
          </a>
          <a
            href="CreateGroup"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Create Group
          </a>
          <a
            href="join-requests"
            className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
          >
            Join Request
          </a>
        </div>
        {props.isHomePage ? (
          <TextField
            leadingIcons={
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  fill="#323232"
                />
                <path
                  d="M15 15L21 21"
                  stroke="#323232"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#323232"
                  stroke-width="2"
                />
              </svg>
            }
            height={12}
            width={64}
            type="text"
            label="Name"
            value={props.name}
            name="name"
            error={props.error}
            onChange={props.onChange}
            placeholder="Please enter your name"
          />
        ) : (
          <></>
        )}
      </>
      <>
        {props.isLandingpage ? (
          <></>
        ) : (
          <div className=" w-4 md:w-12 lg:w-20 mr-4 mr:ml-8 lg:mr-12 h-4 mr:h-12 lg:h-20 mt-3 rounded-full bg-gray-400 item-center text-ellipsis text-center">
            <div>Me</div>
          </div>
        )}
      </>
    </nav>
  );
}
