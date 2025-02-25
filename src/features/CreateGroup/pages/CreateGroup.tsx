/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { NavBar } from "../../../Components/NavBar/navbar";
import { useNavigate } from "react-router-dom";
import { createGroup } from "../../../services/api.services";

interface FormData {
  teamName: string;
  projectDescription: string;
  skillsRequired: string[]; // Change the type to string[]
}

const CreateGroup: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    teamName: "",
    projectDescription: "",
    skillsRequired: [],
  });

  const { teamName, projectDescription, skillsRequired } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "skillsRequired") {
      const skillsArray = value.split(",").map((skill) => skill.trim());
      setFormData({ ...formData, [name]: skillsArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createGroup(teamName, projectDescription, skillsRequired);

      navigate("/Home");
    } catch (error: any) {
      console.error("Error:", error.message);
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

      <div className="max-w-lg mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold mb-4">Create a Group</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="teamName"
              className="block font-medium text-gray-700"
            >
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              placeholder="Your team name"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-100 shadow-md"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="projectDescription"
              className="block font-medium text-gray-700"
            >
              Project Description
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              placeholder="Description for your peoject"
              value={formData.projectDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-md"
              rows={2}
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="skillsRequired"
              className="block font-medium text-gray-700"
            >
              Skills Required
            </label>
            <input
              type="text"
              id="skillsRequired"
              name="skillsRequired"
              placeholder="eg: Flutter,React,Node"
              value={formData.skillsRequired}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-md" // Add shadow class
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purple-500 text-white py-2 px-4 rounded-lg transition-all duration-200  hover:shadow-lg hover:transform hover:scale-105"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
