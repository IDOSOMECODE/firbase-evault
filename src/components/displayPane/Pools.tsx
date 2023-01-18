import { Divider } from "antd";

import { useWindowWidthAndHeight } from "../../hooks/useWindowWidthAndHeight";
import StakeEVaultCard from "./components/StakeEVaultCard";
import StakeEVaultCardUSDT from "./components/StakeEVaultCardUSDT";
import "./Pools.css";

const styles = {
  container: {
    background: "#f5f4f4",
    width: "80%",
    minWidth: "34px",
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

const Pools: React.FC = () => {
  const [width] = useWindowWidthAndHeight();
  const isMobile = width <= 768;

  return (
    <div style={styles.container}>
      <div style={styles.title}>Pools</div>
      <div style={styles.content}>
        All active pools, send me a dm if you want your token here
        <a href="https://t.me/Aleksandee" target="_blank">
          https://t.me/Aleksandee
        </a>
      </div>
      <div style={styles.content}>
        <>
          <Divider />
          <div style={{ display: "block" }}>
            <div className="card">
              <StakeEVaultCard />
            </div>
            <div className="card">
              <StakeEVaultCardUSDT />
            </div>
          </div>
          <div style={styles.action}>
            {!isMobile && <Divider type="vertical" style={{ fontSize: "120px !important" }} />}
          </div>
        </>
      </div>
    </div>
  );
};

export default Pools;
