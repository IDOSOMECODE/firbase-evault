

import { useWindowWidthAndHeight } from "../Hooks/useWindowWidthAndHeight";

import "./Pools.css";

const Pools: React.FC = () => {
  const [width] = useWindowWidthAndHeight();
  const styles = {
    container: {
      background: "#f5f4f4",
      width: width <= 768 ? "100%" : "80%",
      minWidth: "400px",
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
      <div style={styles.title}>Pools</div>
      <div style={styles.content}>
        All active pools, send me a dm if you want your token here
        <a href="https://t.me/Aleksandee" target="_blank">
          https://t.me/Aleksandee
        </a>
      </div>
      
      <div style={styles.content}>
          <div style={{ display: "block" }}>

          </div>
      </div>
    </div>
  );
};

export default Pools;
