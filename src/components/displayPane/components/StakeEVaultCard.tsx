import { useState } from "react";
import { BiArrowFromTop } from "react-icons/bi";
import { BiArrowToTop } from "react-icons/bi";
import logo from "../components/Logos/0xeE34Af939a75223571ac818f0958b67cba48cd01.png";

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
        position: "relative",
      }}
      onClick={() => setExpanded(!expanded)}
    >
      <div
        style={{
          position: "absolute",
          bottom: -20,
          right: 30,
          padding: "10px",
          paddingRight: "30 px",
          fontSize: "30px",
        }}
      >
        {!expanded ? <BiArrowFromTop /> : <BiArrowToTop />}
      </div>
      <div style={{ position: "absolute", bottom: "30px", right: "20px" }}>
{!expanded ? "More Info!" : "Less Info!"}
</div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="Logo" style={{ height: "60px",paddingLeft: "10px",paddingTop: "10px" }} />
        <div style={{ marginLeft: "10px" }}>
          <div style={{ fontWeight: "bold" }}>Manual eVault</div>
          <div>Earn eVault,</div>
          <div>Stake eVault</div>
        </div>

        <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
          <div>APR 10%</div>
        </div>

      </div>
    </div>
  );
};

export default StakeEVaultCard;
