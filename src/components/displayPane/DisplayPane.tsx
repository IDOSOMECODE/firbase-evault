import { useWeb3React } from "@web3-react/core";
import { Divider } from "antd";

import { useWindowWidthAndHeight } from "../../hooks/useWindowWidthAndHeight";
import { Status } from "./components";

const styles = {
  container: {
    background: "#f5f4f4",
    width: "80%",
    minWidth: "340px",
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
  action: {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
  }
} as const;

const DisplayPane: React.FC = () => {
  const { isActivating, isActive } = useWeb3React();
  const [width] = useWindowWidthAndHeight();
  const isMobile = width <= 768;

  return (
    <div style={styles.container}>
      <div style={styles.title}>Welcome to eVault</div>
      <div style={styles.content}>
        <Status isActivating={isActivating} isActive={isActive} />
<p style={{ fontSize: "20px", marginTop: "-5px" }}>This is a beta version of the app, it will be updated along the way. This will become a DeFi app with lots of features!</p>
        {isActive && (
          <>
            <Divider />
            <div style={styles.action}>
              {!isMobile && <Divider type="vertical" style={{ fontSize: "120px !important" }} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DisplayPane;
