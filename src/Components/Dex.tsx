import React from "react";
import eVaultLogo from "../Image/eVaultLogo.png";
import { useWindowWidthAndHeight } from "../Hooks/useWindowWidthAndHeight";

const Dex: React.FC = () => {
const [width] = useWindowWidthAndHeight();

const styles = {
container: {
background: "#f5f4f4",
width: "90%",
textAlign: "center",
borderRadius: "20px",
padding: "10px 0",
display: "flex",
flexDirection: "row"
},
content: {
fontSize: "11px",
display: "inline-block",
width: "100px",
marginRight: "20px"
},
imageContainer: {
width: "55px",
height: "55px",
display: "flex",
alignItems: "center",
justifyContent: "center"
},
image: {
objectFit: "contain",
PaddingRight: "10px",
paddingLeft: "10px"
},
content2: {
fontSize: "11px",
display: "flex",
alignItems: "center",
justifyContent: "center",
width: "100px",
marginRight: "20px"
}
} as const;

return (
<div style={styles.container}>
<div style={styles.imageContainer}>
<img
style={{
maxWidth: "60px",
minWidth: "60px",
width: "60px",
height: "60px",
...styles.image
}}
src={eVaultLogo}
alt="eVault logo"
/>
</div>
<div style={{ width: "100%", paddingLeft: "10px", paddingRight: "10px" }}>
<div style={{ display: "flex", justifyContent: "space-between" }}>
<div style={{ ...styles.content2, textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
BNB /{" "}
<div style={{ fontWeight: "bold", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
eVault
</div>
</div>
<div
style={{
...styles.content,
fontWeight: "bold",
textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
display: width > 800 ? "inline-block" : "none"
}}
>
Volume:
</div>
<div
style={{
...styles.content,
fontWeight: "bold",
textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
}}
> MarketCap:
          </div>
          <div style={{ ...styles.content, fontWeight: "bold", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"  }}>
            Liquidity:
          </div>
          <div style={{ ...styles.content, fontWeight: "bold", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" ,
display: width > 800 ? "inline-block" : "none" }}>
            Contract:
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}}>
          <div style={styles.content}>
            $ 0.0120
          </div>
          <div style={{ ...styles.content, color: "green", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" ,
display: width > 800 ? "inline-block" : "none" }}>
            $ 142,424
          </div>
          <div style={{ ...styles.content, color: "green", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"  }}>
            $ 1,521,232
          </div>
          <div style={{ ...styles.content, textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"  }}>
            <div style={{ color: "green" }}> $ 636,646 </div> <div style={{ color: "yellow" }}>(424 BNB)</div>
          </div>
          <div style={{ ...styles.content, color: "green", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" ,
display: width > 800 ? "inline-block" : "none" }}>
            0xee...cd01
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dex;