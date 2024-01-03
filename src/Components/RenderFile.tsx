import { FunctionComponent } from "react";

export interface IFile {
  name: string;
  sizeInBytes: number;
  format: string;
  id?: string;
  
}

export const RenderFile: FunctionComponent<{
  file: IFile;
}> = ({ file: {  name} }) => {
  return (
    <div className="flex-row text-left items-center mb-4 mx-8">
      <hr className="h-1 mx-auto my-4 bg-purple-300 border-0 rounded " />
      <span className="text-base font-bold">{name}</span>
      {/* <span>{sizeInBytes}</span> */}
    </div>
  );
};
