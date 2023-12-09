import React, { FunctionComponent, useCallback, Dispatch, SetStateAction } from "react";
import { useDropzone } from "react-dropzone";
import SFile from "../Data/file.svg";

interface DropZoneComponentProps {
  setFile: Dispatch<SetStateAction<File | null>>;
}

const DropZoneComponent: FunctionComponent<DropZoneComponentProps> = ({
  setFile,
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, [setFile]);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      
    });

  return (
    <div {...getRootProps()} className="m-8">
      <div className="inline-block w-auto">
        <div
          className={
            "border-dashed border-2 border-sky-500 flex-col justify-center items-center rounded-lg bg-slate-100 " +
            (isDragReject ? "border-red-500 " : "") +
            (isDragAccept ? "border-green-500 " : "")
          }
        >
          <input {...getInputProps()} />
          <div className="my-12 mx-16 flex flex-col items-center">
            <img
              src={SFile}
              alt="file"
              height={44}
              width={44}
              className="my-2"
            />
            <p className="text-gray-500 text-xs">Drag & Drop Files Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropZoneComponent;