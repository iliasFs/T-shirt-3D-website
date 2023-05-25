import { useSnapshot } from "valtio";
import state from "../store";

interface TabProps {
  tab: {
    name: string;
    icon: string;
  };
  handleClick: () => void;
  isFilterTAb?: boolean;
  isActiveTab?: string;
}

const Tab = ({ tab, isFilterTAb, isActiveTab, handleClick }: TabProps) => {
  const snap = useSnapshot(state);

  const activeStyles =
    isFilterTAb && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };
  return (
    <div
      key={tab.name}
      className={`tab-btn ${
        isFilterTAb ? "rounded-full glassmorhism" : "rounded-4"
      }`}
      onClick={handleClick}
      style={activeStyles}
    >
      <img src={tab.icon} alt={tab.name} className={`${isFilterTAb ? 'w-2/3 h-2/3':'w-11/12 h-11/12 object-contain'}`} />
    </div>
  );
};

export default Tab;
