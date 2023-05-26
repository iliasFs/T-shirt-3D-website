import { DecalTypes } from "../config/constants";
import { CustomButton } from ".";
import { SetStateAction } from "react";

interface FilePickerProps {
  file: File | string | undefined;
  setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  readFile: (type: keyof typeof DecalTypes) => void;
}

const FilePicker = ({ file, setFile, readFile }: FilePickerProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          type="file"
          id="file-upload"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload file
        </label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {typeof file === "string" ? "no file selected" : file?.name}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => readFile("logo")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
