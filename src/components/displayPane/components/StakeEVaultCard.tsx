import { useState } from "react";
import { BiArrowFromTop } from "react-icons/bi";
import { BiArrowToTop } from "react-icons/bi";
import logo from "../components/Logos/0xeE34Af939a75223571ac818f0958b67cba48cd01.png";
import { Button } from "antd";
import { useWindowWidthAndHeight } from "../../../hooks/useWindowWidthAndHeight";

const StakeEVaultCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [width] = useWindowWidthAndHeight();

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
          fontSize: "35px",
        }}
      >
        {!expanded ? <BiArrowFromTop /> : <BiArrowToTop />}
      </div>
      <div style={{ fontSize: "15px", position: "absolute", bottom: "35px", right: "25px" }}>
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
          <div style={{ fontWeight: "bold", fontSize: "15px" }}>Manual eVault</div>
          <div style={{  fontSize: "12px" }}>Earn eVault,</div>
          <div style={{  fontSize: "12px" }}>Stake eVault</div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          fontSize: "15px",
          left: "55%",
          paddingTop: "70px",
          transform: "translate(-50%, -50%)",
          fontWeight: "bold"
        }}
      >
        APR:<div>20%</div>
      </div>
      {width > 768 && (
        <div
          style={{
            position: "absolute",
            fontSize: "15px",
            left: "41%",
            paddingTop: "70px",
            transform: "translate(-50%, -50%)",
fontWeight: "bold",
}}
>
<div>Earned:<div>100 EVLT</div></div>
</div>
)}
{width > 768 && (
<div
style={{
position: "absolute",
fontSize: "15px",
left: "70%",
paddingTop: "70px",
transform: "translate(-50%, -50%)",
fontWeight: "bold",

}}
>
<div>Total Staked:<div>10000 EVLT</div></div>
</div>
)}
<div
style={{
position: "absolute",
fontSize: "15px",
left: "50%",
paddingTop: "220px",
transform: "translate(-50%, -50%)",
fontWeight: "bold",
}}
>
{expanded && (
<Button shape="round" type="primary" style={{
height: "40px",
padding: "0 20px",
textAlign: "center",
fontWeight: "600",
letterSpacing: "0.2px",
fontSize: "15px",
margin: "20px 20px",
border: "none",
  background: "black",
  color: "white"}}>
    approve
</Button>


)}
        </div>
        {width < 768 && expanded &&(
        <div
          style={{
            position: "absolute",
            fontSize: "10px",
            left: "10%",
            paddingTop: "220px",
            transform: "translate(-50%, -50%)",
fontWeight: "bold",
}}
>
<div>Earned:<div>100 EVLT</div></div>
</div>
)}
{width < 768 && expanded &&(
  <div
  style={{
  position: "absolute",
  fontSize: "10px",
  left: "30%",
  paddingTop: "220px",
  transform: "translate(-50%, -50%)",
  fontWeight: "bold",
  
  }}
  >
  <div>Total Staked:<div>10000 EVLT</div></div>
  </div>
  )}
    </div>
  
    
  );
};

export default StakeEVaultCard;
