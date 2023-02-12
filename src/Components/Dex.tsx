import React from "react";
import { useWindowWidthAndHeight } from "../Hooks/useWindowWidthAndHeight";
import Dexinfobox from "./Dexinfobox";
import SwapBox from "./SwapBox";
import BuySold from "./BuySold";
import Chart from "./Chart";

const Dex: React.FC = () => {
  const [width] = useWindowWidthAndHeight();

  const containerStyles = {
    display: "flex",
    flexDirection: "column" as "column",
    width: "90%",
    marginLeft: width < 820 ? 0 : "40px"
  };
  
  const innerContainerStyles = {
    display: "flex",
    flexDirection: width < 820 ? "column" as "column" : "row" as "row"
  };

  return (
    <div style={containerStyles}>
      <Dexinfobox />
      <div style={innerContainerStyles}>
        {width < 820 ? (
          <>
            <Chart />
            <SwapBox />
          </>
        ) : (
          <>
            <SwapBox />
            <Chart />
          </>
        )}
        <BuySold />
      </div>
    </div>
  );
};


export default Dex;