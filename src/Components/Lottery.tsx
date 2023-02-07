
import "./Pools.css";
import Marquee from "react-fast-marquee";
const Lottery: React.FC = () => {

  const styles = {
    container: {
      background: "#f5f4f4",
      width: "90%",
      minWidth: "140px",
      maxWidth: "900px",
      textAlign: "center",
      margin: "auto",
      padding: "30px 0",
      borderRadius: "20px"
    },
    title: {
      color: "black",
      fontWeight: 600,
      fontSize: "30px",
      marginBottom: "10px"
    },
    content: {
      width: "85%",
      margin: "auto",
      fontSize: "17px"
    },
    display: {
      paddingBlock: "15px"
    },
    statusText: {
      color: "rgb(46, 46, 46)",
      fontWeight: 800
    },
    card: {
      maxWidth: "100%"
    }
  } as const;

  return (
    <div style={{ ...styles.container}}>
      <div style={styles.title}>Burn Lottery</div>
      <div style={styles.content}>
      <Marquee style={{color: "gray", margin: "5px" }} gradient={false} speed={100} 
  >
          <div style={{display: "flex", justifyContent: "space-between", margin: "10px" }}>
            <div style={{color: "#333333",fontWeight: "bold",paddingRight: "120px" }}>
              Last Winner: 0x0000000000000000000tEsT
            </div>
            <div style={{color: "#333333",fontWeight: "bold" }}>
              Previous Winnings:
              1000000 eVault $
            </div>
          </div>
        </Marquee>
        </div>

      </div>
  );
};

export default Lottery;
