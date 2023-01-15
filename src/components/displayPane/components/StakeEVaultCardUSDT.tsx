import { Button } from "antd";

import "./StakeEVaultCardUSDT.css";
import EarnLogo from "./Logos/0x55d398326f99059ff775485246999027b3197955.png";
import StakeLogo from "./Logos/0xeE34Af939a75223571ac818f0958b67cba48cd01.png";

const StakeEVaultCardUSDT = () => {
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
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}></div>
      <div style={{ fontSize: "10px" }}>Stake eVault</div>
      <div className="stake-evault-card-text">Stake eVault, Earn USDT</div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignSelf: "flex-start" }}>
          <img src={EarnLogo} alt="EarnLogo" width="50px" />
          <img src={StakeLogo} alt="StakeLogo" width="20px" className="second-logo" />
        </div>
      </div>
      <div style={{ display: "flex", alignSelf: "flex-end" }}>
        <Button type="primary">Approve</Button>
      </div>
    </div>
  );
};

export default StakeEVaultCardUSDT;
