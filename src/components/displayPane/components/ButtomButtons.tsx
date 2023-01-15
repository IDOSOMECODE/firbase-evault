import "./ButtomButtons.css";

import { AiFillHome } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { GiFarmTractor } from "react-icons/gi";

interface HeaderButtonsProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const ButtomButtons: React.FC<HeaderButtonsProps> = ({ setCurrentView }) => {
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
      <div style={{ color: "white", fontSize: "40px" }} onClick={() => setCurrentView("home")}>
        <AiFillHome />
      </div>
      <div style={{ color: "White", fontSize: "40px" }} onClick={() => setCurrentView("pools")}>
        <BsCashCoin />
      </div>
      <div style={{ color: "White", fontSize: "40px" }} onClick={() => setCurrentView("farms")}>
        <GiFarmTractor />
      </div>
    </div>
  );
};

export default ButtomButtons;
