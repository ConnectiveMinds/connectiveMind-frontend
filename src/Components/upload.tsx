import DropZoneComponent from "./DropZoneComponent";
import { useState } from "react";
import { RenderFile } from "./RenderFile";
import { useAppDispatch } from "../app/hook";

import { saveFile } from "../services/api.services";  // Assuming this file exports `api` instance

export default function Upload({ id }) {
  const [file, setFile] = useState<File | null>(null);
  console.log({ file });
  const dispatch = useAppDispatch();
  const handleUpload = async () => {
    try {
      if (!file) {
        console.error("File not selected");
        return;
      }
  
      const formData = new FormData();
      formData.append("myFile", file);
      formData.append("project_id", id); // Append project_id to FormData
  
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
  
      // Dispatch the action to initiate file upload
      await dispatch(saveFile({ body: formData, config }));
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };
  return (
    <div className="inline-block border-2 rounded-lg m-8">
      <div>
        <p className="text-lg font-bold text-center my-6 just">
          Upload Your Files
        </p>
        <DropZoneComponent setFile={setFile} />

        {file && (
          <RenderFile
            file={{
              format: file?.type.split("/")[1],
              name: file?.name,
              sizeInBytes: file.size,
            }}
          />
        )}
        <div className="text-center">
          <button
            className=" text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
