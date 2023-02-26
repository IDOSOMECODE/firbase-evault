import { useWindowWidthAndHeight } from "../Hooks/useWindowWidthAndHeight";
import React from "react";

const Chart: React.FC = () => {
  const [width] = useWindowWidthAndHeight();

  const styles = {
    container: {
      background: "#f5f4f4",
      width: "100%",
      textAlign: "center",
      borderRadius: "20px",
      padding: "10px 0",
      display: "flex",
      flexDirection: "row",
      marginTop: "5px",
      marginLeft: width < 820 ? 0 : "5px",
      marginRight: width < 820 ? 0 : "5px"
    },
    content: {
      fontSize: "11px",
      display: "inline-block",
      width: "100px",
      marginRight: "20px"
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
    
 
    </div>
  );
};

export default Chart;