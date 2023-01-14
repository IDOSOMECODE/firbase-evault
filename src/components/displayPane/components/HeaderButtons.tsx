import { useState } from "react";
import "./HeaderButtons.css";

import { AiFillHome } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { GiFarmTractor } from "react-icons/gi";

interface HeaderButtonsProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

const HeaderButtons: React.FC<HeaderButtonsProps> = ({ currentView, setCurrentView }) => {
  const [hover, setHover] = useState("");

  const buttonStyle = {
    cursor: "pointer"
  };

  return (
    <div
      style={{ paddingLeft: "13px", display: "block", alignItems: "center", justifyContent: "center", right: "120px" }}
    >
      <div
        className={`header-button ${hover === "Home" || (currentView === "home" && "active")}`}
        style={buttonStyle}
        onMouseEnter={() => setHover("Home")}
        onMouseLeave={() => setHover("")}
        onClick={() => setCurrentView("home")}
      >
        <AiFillHome />
      </div>
      <div
        className={`header-button ${hover === "Pools" || (currentView === "pools" && "active")}`}
        style={buttonStyle}
        onMouseEnter={() => setHover("Pools")}
        onMouseLeave={() => setHover("")}
        onClick={() => setCurrentView("pools")}
      >
        <BsCashCoin />
      </div>
      <div
        className={`header-button ${hover === "Farms" || (currentView === "farms" && "active")}`}
        style={buttonStyle}
        onMouseEnter={() => setHover("Farms")}
        onMouseLeave={() => setHover("")}
      >
        <GiFarmTractor />
      </div>
    </div>
  );
};

export default HeaderButtons;
