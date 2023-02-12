import React from "react";

const SwapBox: React.FC = () => {

const styles = {
container: {
background: "#f5f4f4",
width: "90%",
textAlign: "center",
borderRadius: "20px",
padding: "10px 0",
display: "flex",
flexDirection: "row",
marginTop: "5px",

marginLeft: "5px",

marginRight: "5px",
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

      </div>
      
    </div>
  );
};


    export default SwapBox;