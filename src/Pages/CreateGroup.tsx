import React, { useState } from 'react';
import { Navbar } from "../Components/navbar";

const CreateGroup: React.FC = () => {
  const [formData, setFormData] = useState({
    teamName: '',
    projectDescription: '',
    skillsRequired: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-lg mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Create a Group</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="teamName" className="block font-medium text-gray-700">Team Name</label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-100 shadow-md"              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="projectDescription" className="block font-medium text-gray-700">Project Description</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-md" // Add shadow class
              rows={4}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="skillsRequired" className="block font-medium text-gray-700">Skills Required</label>
            <input
              type="text"
              id="skillsRequired"
              name="skillsRequired"
              value={formData.skillsRequired}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-md" // Add shadow class
              required
            />
          </div>

          <div className="flex justify-end"> 
          <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 focus:outline-none">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
