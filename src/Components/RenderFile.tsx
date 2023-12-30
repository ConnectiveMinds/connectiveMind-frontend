import { FunctionComponent } from "react";

export interface IFile {
  name: string;
  sizeInBytes: number;
  format: string;
  id?: string;
  
}

export const RenderFile: FunctionComponent<{
  file: IFile;
}> = ({ file: {  name, sizeInBytes } }) => {
  return (
    <div>
      
      <span>{name}</span>
      <span>{sizeInBytes}</span>
    </div>
  );
};
