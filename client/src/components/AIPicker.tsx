import CustomButton from "./CustomButton";
import { DecalTypes } from "../config/constants";
interface AIpickerProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  generatingImage: boolean;
  handleSubmit: (type: keyof typeof DecalTypes) => Promise<void>;
}
const AIPicker = ({
  prompt,
  setPrompt,
  generatingImage,
  handleSubmit,
}: AIpickerProps) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI ..."
        className="aipicker-textarea"
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <div className="flex flex-wrap gap-3">
        {generatingImage ? (
          <CustomButton
            type="outline"
            title="Asking AI ..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
            />
            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
