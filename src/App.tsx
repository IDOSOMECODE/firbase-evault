import { Buffer } from "buffer";

import { useState } from "react";

import { Layout } from "antd";

import background from "./assets/images/background.jpg";
import eVaultLogo from "./assets/images/eVaultLogo.png";
import ConnectAccount from "./components/Account/ConnectAccount";
import ChainSelector from "./components/ChainSelector";
import ButtomButtons from "./components/displayPane/components/ButtomButtons";
import HeaderButtons from "./components/displayPane/components/HeaderButtons";
import DisplayPane from "./components/displayPane/DisplayPane";
import Pools from "./components/displayPane/Pools";
import "./App.css";
import { useWindowWidthAndHeight } from "./hooks/useWindowWidthAndHeight";

const { Header, Footer } = Layout;

const styles = {
  layout: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    fontFamily: "Sora, sans-serif"
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    backgroundColor: "#333333",
    display: "flex",
    alignItems: "center",
    padding: "0px 30px",
    paddingTop: "15px"
  },
  leftContainer: {
    position: "fixed",
    left: "0",
    top: "0",
    bottom: "0",
    width: "70px",
    backgroundColor: "#333333"
  },
  headerRight: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    paddingRight: "10px",
    paddingBottom: "15px",
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
  },
  footer: {
    position: "fixed",
    textAlign: "center",
    width: "100%",
    bottom: "0",
    color: "white",
    backgroundColor: "transparent"
  }
} as const;

function App() {
  const [currentView, setCurrentView] = useState("home");

  if (!window.Buffer) window.Buffer = Buffer;

  return (
    <Layout style={styles.layout}>
      <Header style={{ ...styles.header, justifyContent: "flex-end" }}>
        <div style={styles.headerRight}>
          <ChainSelector />
          <ConnectAccount />
        </div>
        <div style={{ ...styles.leftContainer }}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <Logo />
          </div>
          <HeaderButtons currentView={currentView} setCurrentView={setCurrentView} />
        </div>
      </Header>
      <div style={styles.content}>{currentView === "home" ? <DisplayPane /> : <Pools />}</div>
      <Footer style={styles.footer}>
        <ButtomButtons currentView={currentView} setCurrentView={setCurrentView} />
      </Footer>
    </Layout>
  );
}

export const Logo = () => {
  const [width] = useWindowWidthAndHeight();
  const isMobile = width <= 768;
  return (
    <>
      {isMobile ? (
        <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
          <img src={eVaultLogo} alt="eVaultLogo" width="60px" />
        </div>
      ) : (
        <div style={{ paddingLeft: "10px", paddingTop: "10px" }}>
          <img src={eVaultLogo} alt="eVaultLogo" width="60px" />
        </div>
      )}
    </>
  );
};

export default App;
