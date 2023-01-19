import { useState } from "react";
import "./StakeEVaultCard.css";
import { BiArrowFromTop } from "react-icons/bi";
import { BiArrowToTop } from "react-icons/bi";

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
position: "relative"
}}
onClick={() => setExpanded(!expanded)}
>
<div style={{ position: "absolute", bottom: -20, right: 30, padding: "10px" ,paddingRight: "30 px", fontSize: "30px" }}>
{!expanded ? <BiArrowFromTop /> : <BiArrowToTop />}
</div>
<div style={{ position: "absolute", bottom: "30px", right: "10px" }}>
{!expanded ? "More Info!" : "Less Info!"}
</div>
</div>
);
};

export default StakeEVaultCard;