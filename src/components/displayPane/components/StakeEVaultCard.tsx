import { Card, Button } from "antd";

import "./StakeEVaultCard.css";
import StakeLogo from "./Logos/0xeE34Af939a75223571ac818f0958b67cba48cd01.png";

const StakeEVaultCard = () => {
  return (
    <Card className="stake-evault-card" bordered={true}>
      <div className="stake-evault-card-title">Stake eVault</div>
      <div className="stake-evault-card-text">Stake eVault, Earn Evault</div>
      <div style={{ position: "relative" }}>
        <img src={StakeLogo} alt="StakeLogo" width="50px" />
        <img src={StakeLogo} alt="StakeLogo" width="20px" className="second-logo" />
      </div>
      <Button className="stake-evault-card-button" type="primary">
        Approve
      </Button>
    </Card>
  );
};

export default StakeEVaultCard;
