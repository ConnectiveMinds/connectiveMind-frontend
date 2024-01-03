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

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      skills: e.target.value,
    });
  };
  const handleInstitutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      institution: e.target.value,
    });
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      name: e.target.value,
    });
  };
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      address: e.target.value,
    });
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      email: e.target.value,
    });
  };
  const handleUpdatePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const newProfile = {
          ...profile,
          avatar: reader.result as string,
        };
        setProfile(newProfile);
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
        onChange={
          function (): void {
            throw new Error("Function not implemented.");
          }
        }
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
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label><input
              id="name"
              name="name"
              value={""} 
              onChange={handleNameChange}
              className="mt-1 p-2 border rounded-md w-full"
            ></input>
            
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label><input
              id="email"
              name="email"
              value={""} 
              onChange={handleEmailChange}
              className="mt-1 p-2 border rounded-md w-full"
            ></input>
            
          </div>
          <div className="mb-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label><input
              id="address"
              name="address"
              value={""} 
              onChange={handleAddressChange}
              className="mt-1 p-2 border rounded-md w-full"
            ></input>
            
          </div>
          <div className="mb-2">
            <label htmlFor="institution" className="block text-sm font-medium text-gray-700">
              Institution
            </label><input
              id="institution"
              name="institution"
              value={""} 
              onChange={handleInstitutionChange}
              className="mt-1 p-2 border rounded-md w-full"
            ></input>
            
          </div>

          <div className="mb-2">
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
              Skills (comma-separated)
            </label>
            <input
              id="skills"
              name="skills"
              value={""} 
              onChange={handleSkillsChange}
              className="mt-1 p-2 border rounded-md w-full"
            ></input>
          </div>

          <div className="mb-2">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            {/* Placeholder for gender dropdown */}
            <select id="gender" name="gender" className="mt-1 p-2 border rounded-md w-full">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
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


