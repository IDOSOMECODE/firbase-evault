import React, { useState } from "react";
import { useWindowWidthAndHeight } from "../Hooks/useWindowWidthAndHeight";
import { MdOutlineSwapCalls, MdOutlineSettings } from "react-icons/md";
import Modal from "react-modal";

const SwapBox: React.FC = () => {
  const [width] = useWindowWidthAndHeight();
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlippage(parseFloat(e.target.value));
  };

  const handleSave = () => {
    handleCloseModal();
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slippage, setSlippage] = useState(15);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      background: "#f5f4f4",
      width: width > 820 ? "20%" : "100%",
      textAlign: "center",
      borderRadius: "20px",
      padding: "10px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "5px",
    },
    title: {
      fontSize: "15px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    input: {
      width: "80%",
      height: "30px",
      borderRadius: "5px",
      marginBottom: "10px",
    },
    icon: {
      width: "20px",
      height: "20px",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: "11px",
      marginBottom: "10px",
    },
    slipage: {
      fontSize: "11px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    rate: {
      fontSize: "11px",
      marginBottom: "10px",
    },
    button: {
      width: "80%",
      height: "30px",
      borderRadius: "5px",
      background: "linear-gradient(to right, #00b09b, #96c93d)",
      color: "white",
      fontWeight: "bold",
      marginTop: "10px",
      boxShadow: "0px 5px 10px rgba(0,0,0,0.1)",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={{ ...styles.title, fontWeight: "bold", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
        Swap
      </div>
      <input type="text" style={styles.input} />
      <div style={styles.icon}>
        <MdOutlineSwapCalls size={20} />
      </div>
      <input type="text" style={styles.input} />
      <div style={styles.icon} onClick={handleOpenModal}>
        <MdOutlineSettings size={20} />
      </div>
      <div style={{ fontWeight: "bold", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>Slippage</div>
      <div style={{ fontWeight: "bold", textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>{slippage}%</div>
      <div style={styles.rate}>1 EVLT = 1 BNB</div>
      <button style={styles.button}>Swap</button>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}         style={{
            content: {
                width: '325px',
                height: '200px',
                margin: 'auto',
                backgroundColor: isModalOpen ? '#333333' : 'transparent'
            },
            overlay: {
                backgroundColor: isModalOpen ? 'rgba(0,0,0,0.5)' : 'transparent'
            }
        }}>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ fontWeight: "bold", marginBottom: "10px" }}>Slippage</div>
    <input type="text" style={styles.input} value={slippage} onChange={(e) => {
  const value = parseFloat(e.target.value);
  if (!isNaN(value) && value >= 0 && value <= 100) {
    setSlippage(value);
  } else {
    setSlippage(10);
  }
}} maxLength={3} />
    <input type="range" min="0" max="100" value={slippage} onChange={handleSliderChange} style={{ width: "80%", marginTop: "10px" }} />
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
    <button style={{ ...styles.button, background: "gray", height: "30px", width: "60px", margin: "10px 0" }} onClick={handleCloseModal}>
  Cancel
</button>
<button style={{ ...styles.button, height: "30px", width: "60px", margin: "10px 0" }} onClick={handleSave}>
  Save
</button>
    </div>
  </div>
</Modal>
    </div>
  );
};

export default SwapBox;