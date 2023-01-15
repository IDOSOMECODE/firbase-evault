import { AiFillHome } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { GiFarmTractor } from "react-icons/gi";

import "./ButtomButtons.css";

interface HeaderButtonsProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const ButtomButtons: React.FC<HeaderButtonsProps> = ({ setCurrentView }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#333333",
        paddingTop: "8px"
      }}
    >
      <div className="home-button" style={{ color: "white", fontSize: "30px" }} onClick={() => setCurrentView("home")}>
        <AiFillHome />
        <p style={{ fontSize: "13px", marginTop: "-5px" }}>Home</p>
      </div>
      <div className="home-button" style={{ color: "white", fontSize: "30px" }} onClick={() => setCurrentView("pools")}>
        <BsCashCoin />
        <p style={{ fontSize: "13px", marginTop: "-5px" }}>Pools</p>
      </div>
      <div className="home-button" style={{ color: "white", fontSize: "30px" }} onClick={() => setCurrentView("farms")}>
        <GiFarmTractor />
        <p style={{ fontSize: "13px", marginTop: "-5px" }}>Farms</p>
      </div>
    </div>
  );
};

export default ButtomButtons;
