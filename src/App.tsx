import { useState } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import background from "./Image/background.jpg";
import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import HeaderButtons from "./Components/HeaderButtons";
import ButtomButtons from "./Components/ButtomButtons";
import DisplayPane from "./Components/DisplayPane";
import eVaultLogo from "./Image/eVaultLogo.png";
import Pools from "./Components/Pools";

import { useWindowWidthAndHeight } from "./Hooks/useWindowWidthAndHeight";

const styles = {
  layout: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    fontFamily: "Exo, sans-serif"
  },
  Header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    backgroundColor: "#333333",
    display: "flex",
    alignItems: "center",
    padding: "0px 30px",
    paddingTop: "15px"
  },
  headerRight: {
    display: "flex",
    paddingTop: "15px",
    paddingRight: "10px",
    fontSize: "15px",
    fontWeight: "600"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    color: "#041836",
    marginTop: "100px",
    padding: "10px",
    overflow: "auto"
  }
} as const;

export default function Home() {
  const [currentView, setCurrentView] = useState("home");
  const [width] = useWindowWidthAndHeight();


  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Layout style={styles.layout}>
      <Header style={{ ...styles.Header, justifyContent: "flex-end" }}>
      <div style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1 }}>
            <img src={eVaultLogo} alt="eVaultLogo" width="50px" />
          </div>
        <div style={styles.headerRight} className="connect">
        <ConnectWallet accentColor="white" colorMode="light" />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
            {width > 768 && (
              <div>
                <HeaderButtons currentView={currentView} setCurrentView={setCurrentView} />
              </div>
            )}
          </div>
      </Header>
      {width <= 768 && <ButtomButtons currentView={currentView} setCurrentView={setCurrentView} />}
        <div style={styles.content}>{currentView === "home" ? <DisplayPane /> : <Pools />}</div>
    </Layout>
  </div>
);
}
