import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { deleteFile, getFiles } from "../features/uploadSlice";
import { IoMdDownload } from "react-icons/io";
import { MdDelete } from "react-icons/md";
// import { Link } from "react-router-dom";

export function FilePage() {
  const { data } = useAppSelector((state) => state.files);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFiles("64ec09ac1b7653f6a1d436f2"));
    console.log(data);
  }, []);

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
    } catch (error:any) {
      console.error("An error occurred:", error.message);
    }
  };

  const handleDelete= async (item) =>
  {
    try
    {
      await dispatch(deleteFile(item._id)) 
      dispatch(getFiles("64ec09ac1b7653f6a1d436f2"));
    }catch (error:any) {
      console.error("An error occurred:", error.message);
    }
  }
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-lg text-left rtl:text-right text-gray-500 ">
          <thead className=" text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Format</th>
              <th scope="col" className="px-6 py-3">Size In Byte</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map( (item, index) => (
              <tr key={index} className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{item.filename}</th>
                <td className="px-6 py-4">{item.format}</td>
                <td  className="px-6 py-4">{item.sizeInByte}</td>
                <td  className="px-6 py-4">
                  <div className="flex  items-center gap-4">
                {item.secure_url && (
                    <button onClick={() => handleDownload(item)}>
                      <IoMdDownload />
                    </button>
                  )}
                  <button onClick={()=> handleDelete(item)}>
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
