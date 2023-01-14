import { Card, Button } from "antd";

import "./StakeEVaultCardUSDT.css";
import EarnLogo from "./Logos/0x55d398326f99059ff775485246999027b3197955.png";
import StakeLogo from "./Logos/0xeE34Af939a75223571ac818f0958b67cba48cd01.png";

const StakeEVaultCardUSDT = () => {
  return (
    <Card className="stake-evault-card" bordered={true}>
      <div className="stake-evault-card-title">Stake eVault</div>
      <div className="stake-evault-card-text">Stake eVault, Earn USDT</div>
      <div style={{ position: "relative" }}>
        <img src={EarnLogo} alt="EarnLogo" width="100px" />
        <img src={StakeLogo} alt="StakeLogo" width="40px" className="second-logo" />
      </div>
      <Button className="stake-evault-card-button" type="primary">
        Approve
      </Button>
    </Card>
  );
};

export default StakeEVaultCardUSDT;
