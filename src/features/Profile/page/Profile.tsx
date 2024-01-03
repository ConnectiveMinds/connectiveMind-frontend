import React, { useEffect, useState } from "react";
import { NavBar } from "../../../Components/NavBar/navbar";

import {
  getProfile,
  getProfileStatus,
  selectUser,
  updateProfile,
  updateProfileImage,
} from "../profileslice";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hook";
import { IUser } from "../../HomePage/Interface";

const ProfilePage: React.FC<IUser> = () => {
  // Initial profile information
  const [profile, setProfile] = useState<IUser>({
    gender: "",
    address: "",
    _id: "",
    name: "NA",
    email: "NA",
    skills: [],
    avatar: "",
    institution: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const currentdata = useSelector(selectUser);
  const profileStatus = useSelector(getProfileStatus);
  useEffect(() => {
    if (profileStatus === "idle") {
      dispatch(getProfile());
    } else if (profileStatus == "loading") {
      setIsLoading(true);
    } else if (profileStatus == "fetched") {
      setIsLoading(false);
      setProfile(currentdata);
    } else if (profileStatus == "failed") {
      setIsLoading(false);
      console.log("Error");
    } else if (profileStatus == "imageupdated") {
      setIsLoading(false);
      setProfile(currentdata);
    } else if (profileStatus == "userdetailsupdated") {
      setIsLoading(false);
      console.log(currentdata);
      setProfile(currentdata);
    }
  }, [dispatch, profileStatus, currentdata]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "skills") {
      const skillsArray = value.split(",").map((skill) => skill.trim());
      setProfile({ ...profile, [name]: skillsArray });
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const handleUpdatePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = async () => {
        dispatch(updateProfileImage(file));
      };
    }
  };
  const handleSubmit = () => {
    dispatch(updateProfile(profile));
  };

  return isLoading ? (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
      </div>
    </div>
  ) : (
    <div>
      <NavBar
        isHomePage={false}
        isLandingpage={false}
        name={""}
        error={false}
        onChange={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="flex h-full bg-white">
        {/* Left Column */}
        <div className="w-1/2 p-6">
          <label htmlFor="profilePicture" className="block cursor-pointer">
            <img
              src={profile.avatar}
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-white"
            />
            <input
              id="profilePicture"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUpdatePicture}
            />
          </label>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
            <p className="text-gray-500 mb-2">{profile.email}</p>
            <p className="text-gray-500">{profile.address}</p>
            <p className="text-gray-500 mb-2">{profile.institution}</p>
            <p className="text-gray-500">{profile.skills}</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/3 p-3">
          <div className="mb-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            ></input>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            ></input>
          </div>
          <div className="mb-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              id="address"
              name="address"
              value={profile.address}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            ></input>
          </div>
          <div className="mb-2">
            <label
              htmlFor="institution"
              className="block text-sm font-medium text-gray-700"
            >
              Institution
            </label>
            <input
              id="institution"
              name="institution"
              value={profile.institution}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            ></input>
          </div>

          <div className="mb-2">
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Skills (comma-separated)
            </label>
            <input
              id="skills"
              name="skills"
              value={profile.skills}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-md w-full"
            ></input>
          </div>

          <div className="mb-2">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700"
            >
              Gender
            </label>
            {/* Placeholder for gender dropdown */}
            <select
              id="gender"
              name="gender"
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option value="M">M</option>
              <option value="F">F</option>
              <option value="O">O</option>
            </select>
          </div>

          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 mt-4 mx-auto block"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
