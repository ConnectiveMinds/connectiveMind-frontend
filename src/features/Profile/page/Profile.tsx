import React, { useEffect, useState } from "react";
import { NavBar } from "../../../Components/NavBar/navbar";

import {
  getProfile,
  getProfileStatus,
  selectUser,
  updateProfileImage,
} from "../profileslice";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hook";
import { IUser } from "../../HomePage/Interface";

const ProfilePage: React.FC<IUser> = () => {
  // Initial profile information
  const [profile, setProfile] = useState<IUser>({
    address: "NA",
    _id: "",
    name: "NA",
    email: "NA",
    skills: [],
    avatar: "NA",
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
      console.log("Error");
    } else if (profileStatus == "updated") {
      console.log(currentdata);
      setIsLoading(false);
      setProfile(currentdata);
    }
  }, [dispatch, profileStatus, currentdata]);

  const [formValues, setFormValues] = useState({});

  const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      skills: e.target.value,
    });
  };

  const handleUpdatePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = async () => {
        dispatch(updateProfileImage(file));
      };

      reader.readAsDataURL(file);
    }
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
      <div className="flex items-center justify-center h-full bg-white">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <label htmlFor="profilePicture" className="block cursor-pointer">
            <img
              src={profile.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white"
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
          </div>

          <div className="mt-4">
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Skills (comma-separated)
            </label>
            <textarea
              id="skills"
              name="skills"
              value={""}
              onChange={handleSkillsChange}
              className="mt-1 p-2 border rounded-md w-full"
            ></textarea>
          </div>

          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 mt-4 mx-auto block"
            onClick={() => console.log("Update Skills")}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
