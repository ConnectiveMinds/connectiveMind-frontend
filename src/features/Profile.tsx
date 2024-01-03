import React, { useEffect, useState } from "react";
import { NavBar } from "../Components/NavBar/navbar";
import { getProfile } from "../services/api.services";

interface ProfilePageProps {
  _id: string;
  name: string;
  email: string;
  skills: string[];
  avatar: string;
  institution: string;
  address: string;
  userId: string;
}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  // Initial profile information
  const [profile, setProfile] = useState<ProfilePageProps>({
    userId: "",
    address: "",
    _id: "",
    name: "NA",
    email: "NA",
    skills: [],
    avatar: "",
    institution: "",
  });
  useEffect(() => {
    getProfile().then((data) => {
      console.log(data.data);
      setProfile(data.data);
    });
  }, []);
  console.log(profile.name);
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

      reader.onloadend = () => {
        // const newProfile = {
        //   ...profile,
        //   avatar: reader.result as string,
        // };
        // setProfile(newProfile);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
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
