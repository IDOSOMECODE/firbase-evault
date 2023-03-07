
import "./Farm.css";
import  Farmcard  from './Farmcard';
import eVaultLogo from "../Image/eVaultLogo.png";
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
      width: "95%",
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
      <div style={styles.title}>Farm</div>
      <div style={styles.content}>
        All active Farm
        <div>Harvest your digital wealth with Crypto Farm</div>
        <div><a href="https://t.me/Aleksandee" target="_blank" rel="noreferrer">
          Click to contact.
        </a></div>
      </div>
      
      <div style={styles.content}>
          <Farmcard 
    logo={eVaultLogo}
    manualEVault={'Farm eVault'}
    earnEVaultStake={'Farm by locking tokens'}
    apy={'260.4'}
    totalStaked={'1,000,000'}
    detailsLink={'/evault1'}
    recentEVaultProfit={'$10,000'}
    viewContractLink={'https://example.com/evault1'}
    connectLink={'https://example.com/connect'}
/>

          </div>
      </div>
  );
};

export default Farm;
