import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hook";

import { IoMdDownload } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { deleteFile, getFilesById } from "../../../services/api.services";
import Upload from "../components/upload";
import { HiOutlineUpload } from "react-icons/hi";
import { File } from "../components/uploadSlice";

// import { Link } from "react-router-dom";

export function FilePage({ _id }) {
  const [showUpload, SetShowUpload] = useState(false);
  const [data, setData] = useState<File[]>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    getFilesById(_id).then((data) => {
      setData(data);
    });
  }, [data]);
  const handleDownload = async (item) => {
    try {
      const response = await fetch(item.secure_url, {
        headers: {
          Accept: "application/octet-stream, application/pdf",
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = item.filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Download failed:", response.statusText);
      }
    } catch (error: any) {
      console.error("An error occurred:", error.message);
    }
  };

  const handleDelete = async (item) => {
    try {
      console.log(item._id);
      const response = await dispatch(deleteFile(item._id));

      // Check if the deleteFile action was fulfilled successfully
      if (deleteFile.fulfilled.match(response)) {
        console.log("File deleted successfully:", response.payload);
        // You can perform additional actions if needed
        getFilesById(_id); // Refresh the file list after deletion
      } else if (deleteFile.rejected.match(response)) {
        // The file deletion failed
        console.error("Error during file deletion:", response.payload);
        // You can perform additional actions if needed
      }
    } catch (error: any) {
      console.error("An error occurred:", error.message);
    }
  };
  return (
    <div className="w-full ">
      <div className="flex justify-end mx-4 my-4">
        <button
          type="button"
          className="text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-md px-4 py-2.5 text-center flex flex-row justify-center  items-center me-2 gap-2"
          onClick={() => {
            SetShowUpload(true);
          }}
        >
          <HiOutlineUpload />
          <p>Upload</p>
        </button>
      </div>
      {showUpload && (
        <Upload
          id={_id}
          onClose={() => {
            SetShowUpload(false);
          }}
        />
      )}

      <div className={`overflow-x-auto w-full ${showUpload ? "" : "relative"}`}>
        {/* {loading && <p>Loading...</p>} */}

        <table className="w-full text-lg text-left rtl:text-right text-gray-500  ">
          <thead className=" text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Format
              </th>
              <th scope="col" className="px-6 py-3">
                Size In Byte
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr key={index} className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {item.filename}
                </th>
                <td className="px-6 py-4">{item.format}</td>
                <td className="px-6 py-4">{item.sizeInByte}</td>
                <td className="px-6 py-4">
                  <div className="flex  items-center gap-4">
                    {item.secure_url && (
                      <button onClick={() => handleDownload(item)}>
                        <IoMdDownload />
                      </button>
                    )}
                    <button onClick={() => handleDelete(item)}>
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
