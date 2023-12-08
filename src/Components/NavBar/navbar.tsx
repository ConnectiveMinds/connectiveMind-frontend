import { ChangeEvent, useState } from "react";
import { TextField } from "../TextField/texfield";
import {Link} from "react-router-dom";

interface INavBarProps {
  isHomePage: boolean;
  isLandingpage: boolean;
  name: string | number;
  error: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function NavBar(props: INavBarProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-2">
      <div className="flex items-center">
        <Link to="Home">
        <img
          className="w-8 md:w-16 lg:w-32 ml-4 md:ml-8 lg:ml-12 h-8 md:h-16 lg:h-28"
          src="src/Data/Connective 1.png"
          alt="Logo"
        />
        </Link>
        

        {props.isHomePage && (
          <div className="ml-10">
            <TextField
            leadingIcons={
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ... */}
              </svg>
            }
            height={8} 
            width={24} 
            type="text"
            label="Name"
            value={props.name}
            name="name"
            error={props.error}
            onChange={props.onChange}
            placeholder="Search"
            
          />
          </div>
          
        )}
      </div>

      <div className="hidden md:flex items-center space-x-10">
        <a href="Home" className="text-white-200 mr-4">
          Home
        </a>
        <a href="CreateGroup" className="text-white-200 mr-4">
          Create Group
        </a>
        <a href="join-requests" className="text-white-200">
          Join Request
        </a>
      </div>

      <div className="flex items-center">
        <div
          className="md:hidden ml-auto cursor-pointer"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-12 right-4 p-4 bg-white shadow-md rounded">
            <a href="">
              Me
            </a>
            <a href="Home" className="block my-2 text-gray-800">
              Home
            </a>
            <a href="CreateGroup" className="block my-2 text-gray-800">
              Create Group
            </a>
            <a href="join-requests" className="block my-2 text-gray-800">
              Join Request
            </a>
          </div>
        )}

        {!props.isLandingpage && (
          <div className="hidden md:block w-4 md:w-12 lg:w-20 ml-4 md:ml-8 lg:ml-12 h-4 md:h-12 lg:h-20 mt-3 rounded-full bg-gray-400 item-center text-ellipsis text-center">
            <div>Me</div>
          </div>
        )}
      </div>
    </nav>
  );
}
