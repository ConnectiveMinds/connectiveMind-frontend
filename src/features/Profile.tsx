import React, { useState } from "react";

interface ProfilePageProps {
  // You can add more specific props if needed
}

const ProfilePage: React.FC<ProfilePageProps> = () => {

  // Initial profile information
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main St, Cityville",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    profilePicture: "https://placekitten.com/200/200",
  });

  // State for form inputs
  const [formValues, setFormValues] = useState({
    skills: profile.skills.join(", "),
  });

  // Handle skills input changes
  const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      skills: e.target.value,
    });
  };

  // Handle profile picture update
  const handleUpdatePicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const newProfile = { ...profile, profilePicture: reader.result as string };
        setProfile(newProfile);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md md:w-96 md:h-96">
        <label htmlFor="profilePicture" className="block cursor-pointer">
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <input
            id="profilePicture"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpdatePicture}
          />
        </label>
        <div className="text-center mt-4">
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-gray-500">{profile.email}</p>
          <p className="text-gray-500">{profile.address}</p>
        </div>

        <div className="mt-4">
          <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
            Skills (comma-separated)
          </label>
          <textarea
            id="skills"
            name="skills"
            value={formValues.skills}
            onChange={handleSkillsChange}
            className="mt-1 p-2 border rounded-md w-full"
          ></textarea>
        </div>

        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 mt-4 mx-auto block"
          onClick={() => console.log("Update Skills", formValues.skills)}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
