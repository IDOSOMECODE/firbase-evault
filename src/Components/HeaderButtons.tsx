import { useState } from "react";
import "./HeaderButtons.css";

import { AiFillHome } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { GiFarmTractor } from "react-icons/gi";
import { BsKeyFill } from "react-icons/bs";

interface HeaderButtonsProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}
const HeaderButtons: React.FC<HeaderButtonsProps> = ({ currentView, setCurrentView }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`header-button-container ${hover ? "hover" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`header-button ${currentView === "home" && "active"} ${hover ? "hover" : ""}`}
        onClick={() => setCurrentView("home")}
      >
        <AiFillHome />
        {hover && (
          <div className="icon-text" style={{ marginLeft: "10px" }}>
          Home</div>
        )}
      </div>
      <div
        className={`header-button ${currentView === "pools" && "active"} ${hover ? "hover" : ""}`}
        onClick={() => setCurrentView("pools")}
      >
        <BsCashCoin />
        {hover && (
          <div className="icon-text" style={{ marginLeft: "10px" }}>
          Pools</div>
        )}
      </div>

      <div
        className={`header-button ${currentView === "farm" && "active"} ${hover ? "hover" : ""}`}
        onClick={() => setCurrentView("farm")}
      >
        <GiFarmTractor />
        {hover && (
          <div className="icon-text" style={{ marginLeft: "10px" }}>
          Farms</div>
        )}
      </div>

      <div
        className={`header-button ${currentView === "login" && "active"} ${hover ? "hover" : ""}`}
        onClick={() => setCurrentView("login")}
      >
        <BsKeyFill />
        {hover && (
          <div className="icon-text" style={{ marginLeft: "10px" }}>
          Login</div>
        )}
      </div>


    </div>
  );
};

export default HeaderButtons;
