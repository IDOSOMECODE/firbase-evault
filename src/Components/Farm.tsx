
import "./Pools.css";

const Farm: React.FC = () => {

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
      <div style={styles.title}>Farms</div>
      <div style={styles.content}>
        All active Farm
        <div>Please send me a direct message if you wish to list your Farm.</div>
        <div><a href="https://t.me/Aleksandee">
          Click to contact.
        </a></div>
      </div>
      

      </div>
  );
};

export default Farm;
