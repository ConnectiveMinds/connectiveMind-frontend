import DropZoneComponent from "./DropZoneComponent";
import { useState } from "react";
import { RenderFile } from "./RenderFile";
import { useAppDispatch } from "../app/hook";

import { getFilesById, saveFile } from "../services/api.services";  // Assuming this file exports `api` instance
import { ToastContainer, toast } from "react-toastify";

export default function Upload({ id, onClose }) {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  console.log({ file });
  const dispatch = useAppDispatch();
  const handleUpload = async () => {
    setIsLoading(true);
    try {
      if (!file) {
        console.error("File not selected");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("projectId", id); // Append project_id to FormData

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      // Dispatch the action to initiate file upload
      const action = await dispatch(saveFile({ body: formData, config }));
      if (saveFile.fulfilled.match(action)) {
        console.log("saved");
        console.log("File uploaded successfully:", action.payload);
        toast.success("File Saved Successfully");
        setIsLoading(false);
        dispatch(getFilesById(id));

        // You can perform additional actions if needed
      } else if (saveFile.rejected.match(action)) {
        // The file upload failed
        console.error("Error during file upload:", action.payload);
        toast.error("File Not Saved");
        // You can perform additional actions if needed
      }
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  return (
    isLoading ? (
      <div className="flex items-center justify-center h-screen w-full">
    <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
        </div>
    </div>
</div>
    ) : (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 backdrop-blur">
        <div className="bg-white inline-block border-2 rounded-lg m-8">
          <div>
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
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={handleUpload}
                >
                  Upload
                </button>
                <button
                  className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  );
}
