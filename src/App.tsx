import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { Binance } from "@thirdweb-dev/chains";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./styles/Home.css";
import background from "./Image/background.jpg";
import { Layout } from "antd";
import HeaderButtons from "./Components/HeaderButtons";
import ButtomButtons from "./Components/ButtomButtons";
import DisplayPane from "./Components/DisplayPane";
import eVaultLogo from "./Image/eVaultLogo.png";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { useWindowWidthAndHeight } from "./Hooks/useWindowWidthAndHeight";
import Farm from "./Components/Farm";
import Pools from "./Components/Pools";
import Dex from "./Components/Dex";
import Lottery from "./Components/Lottery";

const styles = {
  layout: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    fontFamily: "Exo, sans-serif"
  },
  Header: {
    position: "fixed",
    width: "100%",
    backgroundColor: "#333333",
    display: "flex",
    alignItems: "center",
    padding: "0px 30px",
    paddingTop: "15px",
    height: "70px"
  },
  headerRight: {
    display: "flex",
    paddingTop: "15px",
    paddingRight: "10px",
    position: "absolute", right: "-25px"
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
  const [width] = useWindowWidthAndHeight();

  return (
    <ThirdwebProvider activeChain={Binance}>
    <BrowserRouter>
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Layout style={styles.layout}>
      <div style={{ ...styles.Header, justifyContent: "flex-end" }}>
      <div style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1 }}>
            <img src={eVaultLogo} alt="eVaultLogo" width="50px" />
          </div>
        <div style={styles.headerRight } className="connect">
        <ConnectWallet accentColor="white" colorMode="light" />
       
        
        </div>
        
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          
            {width > 820 && (
              <div>
                <HeaderButtons />
              </div>
            )}
          </div>
      </div>
      
      {width <= 820 && <ButtomButtons />}
      <div style={styles.content}> 
      <Routes>
      <Route path="/" element={<DisplayPane />} />
      <Route path="/pools" element={<Pools />} />
      <Route path="/farm" element={<Farm />} />
      <Route path="/lottery" element={<Lottery />} />
      <Route path="/dex" element={<Dex />} />

      </Routes>
      </div>
    </Layout>
  </div>
  </BrowserRouter>
  </ThirdwebProvider>
);
}