import { useWindowWidthAndHeight } from "../Hooks/useWindowWidthAndHeight";
import "./Pools.css";
import  StakeCard  from './StakeCard';
import eVaultLogo from "../Image/eVaultLogo.png";
const Pools: React.FC = () => {
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
      <div style={styles.title}>Pools</div>
      <div style={styles.content}>
        All active Pools
        <div>Please send me a direct message if you wish to list your token.</div>
        <div><a href="https://t.me/Aleksandee" target="_blank" rel="noreferrer">
          Click to contact.
        </a></div>
      </div>
      
      <div style={styles.content}>
          <StakeCard 
    logo={eVaultLogo}
    manualEVault={'Manual eVault'}
    earnEVaultStake={'Earn by staking tokens'}
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

export default Pools;
