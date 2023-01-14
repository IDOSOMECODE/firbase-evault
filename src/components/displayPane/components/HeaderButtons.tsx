import { useState } from "react";
import "./HeaderButtons.css";

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
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", right: "120px" }}>
      <div
        className={`header-button ${hover === "Home" || (currentView === "home" && "active")}`}
        style={buttonStyle}
        onMouseEnter={() => setHover("Home")}
        onMouseLeave={() => setHover("")}
        onClick={() => setCurrentView("home")}
      >
        Home
      </div>
      <div
        className={`header-button ${hover === "Pools" || (currentView === "pools" && "active")}`}
        style={buttonStyle}
        onMouseEnter={() => setHover("Pools")}
        onMouseLeave={() => setHover("")}
        onClick={() => setCurrentView("pools")}
      >
        Pools
      </div>
      <div
        className={`header-button ${hover === "Farms" || (currentView === "farms" && "active")}`}
        style={buttonStyle}
        onMouseEnter={() => setHover("Farms")}
        onMouseLeave={() => setHover("")}
      >
        Farms
      </div>
    </div>
  );
};

export default HeaderButtons;
