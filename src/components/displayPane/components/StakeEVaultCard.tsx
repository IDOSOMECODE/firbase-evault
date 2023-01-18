import { useState } from "react";
import { Button } from "antd";
import "./StakeEVaultCard.css";
//import StakeLogo from "./Logos/0xeE34Af939a75223571ac818f0958b67cba48cd01.png";
const StakeEVaultCard = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        height: expanded ? "150px" : "75px",
        background: "white",
        borderRadius: "5px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
      onClick={() => setExpanded(!expanded)}
    >
              <div style={{ 
          height: "100%",
          width: "30%",
          background: "black",
          color: "white",
          display: "flex",
          alignSelf: "flex-end",
          border: "5px solid black"
        }}>
          {expanded ? "Hide Info!" : "Display Info!"}
        </div>
        {expanded && (
          <div style={{ display: "flex", alignSelf: "flex-end", paddingRight: "10px", paddingBottom: "10px" }}>
            <Button type="primary">Approve</Button>
          </div>
        )}
      </div>

  );
};

export default StakeEVaultCard;