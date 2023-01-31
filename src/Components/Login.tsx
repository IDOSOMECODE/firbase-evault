import { useWindowWidthAndHeight } from "../Hooks/useWindowWidthAndHeight";
import "./Pools.css";
const Login: React.FC = () => {
  const [width] = useWindowWidthAndHeight();
  const styles = {
    container: {
      background: "#f5f4f4",
      width: width <= 768 ? "100%" : "90%",
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
      <div style={styles.title}>Login</div>
     
      

      </div>
  );
};

export default Login;
