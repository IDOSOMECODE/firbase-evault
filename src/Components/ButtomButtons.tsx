 // eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { GiFarmTractor } from "react-icons/gi";
import { BsKeyFill } from "react-icons/bs";
import "./ButtomButtons.css";

const ButtomButtons: React.FC = () => {
return (

<div
style={{
position: "fixed",
bottom: "0",
width: "100%",
display: "flex",
justifyContent: "space-around",
backgroundColor: "#333333",
paddingTop: "8px"
}}
>
<Link to="/" className="home-button" style={{ color: "white", fontSize: "30px" }}>
<AiFillHome />
<p style={{ fontSize: "13px", marginTop: "-5px" }}>Home</p>
</Link>
<Link to="/pools" className="home-button" style={{ color: "white", fontSize: "30px" }}>
<BsCashCoin />
<p style={{ fontSize: "13px", marginTop: "-5px" }}>Pools</p>
</Link>
<Link to="/farm" className="home-button" style={{ color: "white", fontSize: "30px" }}>
<GiFarmTractor />
<p style={{ fontSize: "13px", marginTop: "-5px" }}>Farm</p>
</Link>
<Link to="/login" className="home-button" style={{ color: "white", fontSize: "30px" }}>
<BsKeyFill />
<p style={{ fontSize: "13px", marginTop: "-5px" }}>Login</p>
</Link>
</div>

);
};

export default ButtomButtons;