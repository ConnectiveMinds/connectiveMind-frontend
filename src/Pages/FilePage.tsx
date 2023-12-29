import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { deleteFile } from "../features/File/components/uploadSlice";
import { IoMdDownload } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { getFilesById } from "../services/api.services";
import Upload from "../Components/upload";
import { HiOutlineUpload } from "react-icons/hi";
// import { Link } from "react-router-dom";

export function FilePage({ _id }) {
  const [showUpload, SetShowUpload] = useState(false);
  const { data, loading, error } = useAppSelector((state) => state.files);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFilesById(_id));
    console.log(data);
  }, [_id, dispatch]);
  const handleDownload = async (item) => {
    console.log(item);
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
      await dispatch(deleteFile(item._id));
      // dispatch(getFilesById("64ec09ac1b7653f6a1d436f2"));
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
      {/* {showUpload && (
        <Upload
          _id={_id}
          onClose={() => {
            SetShowUpload(false);
          }}
        />
      )} */}

      <div className={`overflow-x-auto w-full ${showUpload ? "" : "relative"}`}>
        {loading && <p>Loading...</p>}

        {!loading && data.length > 0 && (
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
              {data.map((item, index) => (
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
        )}
        {!loading && data.length === 0 && <p>No files found.</p>}

        {error && <p>Error: {error}</p>}
      </div>
    </div>
  );
}
