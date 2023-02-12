import React from "react";
import { useWindowWidthAndHeight } from "../Hooks/useWindowWidthAndHeight";
import { MdOutlineSwapCalls } from "react-icons/md";

const SwapBox: React.FC = () => {
const [width] = useWindowWidthAndHeight();

const styles = {
container: {
background: "#f5f4f4",
width: width > 820 ? "20%" : "100%",
textAlign: "center",
borderRadius: "20px",
padding: "10px 0",
display: "flex",
flexDirection: "column",
alignItems: "center",
marginTop: "5px",
},
title: {
fontSize: "15px",
fontWeight: "bold",
marginBottom: "10px",
},
input: {
width: "80%",
height: "30px",
borderRadius: "5px",
marginBottom: "10px",
},
icon: {
width: "20px",
height: "20px",
marginBottom: "10px",
display: "flex",
alignItems: "center",
justifyContent: "center",
},
text: {
fontSize: "11px",
marginBottom: "10px",
},
slipage: {
fontSize: "11px",
fontWeight: "bold",
marginBottom: "10px",
},
rate: {
fontSize: "11px",
marginBottom: "10px",
},
button: {
  width: "80%",
  height: "30px",
  borderRadius: "5px",
  background: "linear-gradient(to right, #00b09b, #96c93d)",
  color: "white",
  fontWeight: "bold",
  marginTop: "10px",
  boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
  cursor: "pointer"
  }
} as const;

return (

<div style={styles.container}>
<div style={{...styles.title, fontWeight: "bold", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>Swap</div>
<input type="text" style={styles.input} />
<div style={styles.icon}>
<MdOutlineSwapCalls size={20} />
</div>
<input type="text" style={styles.input} />
<div style={{ fontWeight: "bold", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>Slippage</div>
<div style={{ fontWeight: "bold", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>15%</div>
<div style={styles.rate}>1 EVLT = 1 BNB</div>
<button style={styles.button}>Swap</button>
</div>
);
};
export default SwapBox;