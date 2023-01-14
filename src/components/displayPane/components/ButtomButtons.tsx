import "./ButtomButtons.css";

import { AiFillHome } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { GiFarmTractor } from "react-icons/gi";

interface HeaderButtonsProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const ButtomButtons: React.FC<HeaderButtonsProps> = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#333333",
        paddingTop: "15px"
      }}
    >
      <div style={{ color: "white", fontSize: "40px" }}>
        <AiFillHome />
      </div>
      <div style={{ color: "White", fontSize: "40px" }}>
        <BsCashCoin />
      </div>
      <div style={{ color: "White", fontSize: "40px" }}>
        <GiFarmTractor />
      </div>
    </div>
  );
};

export default ButtomButtons;
