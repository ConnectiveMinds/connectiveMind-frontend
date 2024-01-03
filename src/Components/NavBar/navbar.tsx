import { ChangeEvent, useEffect, useState } from "react";
import { TextField } from "../TextField/texfield";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hook";
import {
  selectUser,
  getProfileStatus,
  getProfile,
} from "../../features/Profile/profileslice";
import { HorizontalDivider } from "../Divider/horizontalDivider";

interface INavBarProps {
  isHomePage: boolean;
  isLandingpage: boolean;
  name: string | number;
  error: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function NavBar(props: INavBarProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [useravatar, setavatar] = useState<string>("publicavatar.png");

  const dispatch = useAppDispatch();
  const currentdata = useSelector(selectUser);
  const profileStatus = useSelector(getProfileStatus);
  useEffect(() => {
    if (profileStatus === "idle") {
      dispatch(getProfile());
    } else if (profileStatus == "loading") {
      setavatar("publicavatar.png");
    } else if (profileStatus == "fetched") {
      setavatar(currentdata.avatar);
    } else if (profileStatus == "failed") {
      setavatar("publicavatar.png");
      console.log("Error");
    } else if (profileStatus == "updated") {
      setavatar(currentdata.avatar);
    }
  }, [dispatch, currentdata]);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col">
      <nav className="flex justify-between items-center p-2">
        <div className="flex items-center">
          <Link to="../Home">
            <img
              className="w-8 md:w-16 lg:w-32 ml-4 md:ml-8 lg:ml-12 h-8 md:h-16 lg:h-28"
              src="src/Data/Connective 1.png"
              alt="Logo"
            />
          </Link>
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
        {props.isHomePage && (
          <div className="ml-10">
            <TextField
              leadingIcons={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C3 7.68333 3.62933 6.146 4.888 4.888C6.14667 3.63 7.684 3.00067 9.5 3C11.3167 3 12.854 3.62933 14.112 4.888C15.37 6.14667 15.9993 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5623 12.688 12.687C13.5633 11.8117 14.0007 10.7493 14 9.5C14 8.25 13.5623 7.18733 12.687 6.312C11.8117 5.43667 10.7493 4.99933 9.5 5C8.25 5 7.18733 5.43767 6.312 6.313C5.43667 7.18833 4.99933 8.25067 5 9.5C5 10.75 5.43767 11.8127 6.313 12.688C7.18833 13.5633 8.25067 14.0007 9.5 14Z"
                    fill="#9C9C9C"
                  />
                </svg>
              }
              height={8}
              width={45}
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
              <a href="">Me</a>
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
            <div className="hidden md:flex items-center space-x-2">
              <Link to="../Profile">
                <img
                  src={useravatar}
                  className="h-4 md:h-8 lg:h-12 rounded-full"
                />
              </Link>
              <Link to="../SignUp">
                <img
                  src="public\logout.png"
                  className="m-4 h-3 md:h-4 lg:h-8"
                />
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div className="mb-4">
        <HorizontalDivider />
      </div>
    </div>
  );
}
