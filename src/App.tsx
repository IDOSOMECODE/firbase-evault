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

const { Header } = Layout;

const styles = {
  layout: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
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
  }
} as const;

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [width] = useWindowWidthAndHeight();

  if (!window.Buffer) window.Buffer = Buffer;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Layout style={styles.layout}>
        <Header style={{ ...styles.header, justifyContent: "flex-end" }}>
          <div style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1 }}>
            <img src={eVaultLogo} alt="eVaultLogo" width="50px" />
          </div>
          <div style={styles.headerRight}>
            <ChainSelector />
            <ConnectAccount />
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

export default App;
