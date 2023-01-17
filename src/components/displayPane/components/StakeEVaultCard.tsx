import { Button } from "antd";

import "./StakeEVaultCard.css";
import StakeLogo from "./Logos/0xeE34Af939a75223571ac818f0958b67cba48cd01.png";

const StakeEVaultCard = () => {
  return (
    <div
      style={{
        height: "75px",
        background: "white",
        borderRadius: "5px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
        <div className="stake-evault-card-title">Stake eVault</div>
        <div className="stake-evault-card-text">Stake eVault, Earn Evault</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignSelf: "flex-start" }}>
          <img src={StakeLogo} alt="StakeLogo" width="30px" />
          <img src={StakeLogo} alt="StakeLogo" width="20px" className="second-logo" />
        </div>
        <div style={{ display: "flex", alignSelf: "flex-end", paddingRight: "10px" }}>
          <Button type="primary">Approve</Button>
        </div>
      </div>
    </div>
  );
};

export default StakeEVaultCard;
