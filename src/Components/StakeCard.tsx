import { useState, useEffect } from "react";
import "./StakeCard.css";
import Modal from 'react-modal';
import {
  useContract,
  useContractWrite,
  Web3Button,
  useAddress,
  useContractRead
} from "@thirdweb-dev/react";
import { ethers, BigNumber } from "ethers";
import "@thirdweb-dev/contracts/extension/ContractMetadata.sol";


interface StakeCardProps {
  logo: string;
  manualEVault: string;
  earnEVaultStake: string;
  apy: string;
  totalStaked: string;
  detailsLink: string;
  recentEVaultProfit: string;
  viewContractLink: string;
  connectLink: string;
}

const StakeCard: React.FC<StakeCardProps> = (props) => {
    const address = useAddress();
  const [apy, setApy] = useState("");
  const [totalStaked, SetTotalStaked] = useState("");
  const [earnEVaultStake, setearnEVaultStake] = useState("");
  const [isEarnEVaultStakeLoading, setIsEarnEVaultStakeLoading] = useState(true)
  const { contract: mainContract } = useContract("0x4356Ef291421416AA3D1216023a2509da4BB06fC");
  const tokenContractAddress = "0x7722C97E49453D619fB791C9e0dD288838d03fa0";
  const stakingContractAddress = "0x4356Ef291421416AA3D1216023a2509da4BB06fC";
// eslint-disable-next-line
  const { contract: stakeContract } = useContract(stakingContractAddress, "custom");
// eslint-disable-next-line
  const { data: ApyData, isLoading: isApyLoading } = useContractRead(mainContract, "getFixedAPY");
// eslint-disable-next-line
  const { data: getTotalStakedData, isLoading: isTotalStakedLoading } = useContractRead(mainContract, "getTotalStaked");
// eslint-disable-next-line
  const { data: getEstimatedRewardData, isLoading: isEstimatedRewardLoading } = useContractRead(mainContract, "getEstimatedReward", address);
  const { contract: token } = useContract(tokenContractAddress);
  const { data: balanceOf } = useContractRead(token, "balanceOf", address);
// eslint-disable-next-line
  const { mutateAsync: approve, isLoading: isApproveLoading } = useContractWrite(
    token,
    "approve"
  );

  const { mutateAsync: stake } = useContractWrite(mainContract, "stake");
  const { mutateAsync: withdraw } = useContractWrite(mainContract, "withdraw");
  const [amount, setAmount] = useState<string>("");

  const [isExpanded, setIsExpanded] = useState(false);
  // eslint-disable-next-line
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false)


  
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleStake = async () => {
    await approveTokens(amount);
    alert("Pool Enabled! Now you need to confirm transaction to Staking pool!");
    await stakeTokens(amount);
    alert("Tokens staked successfully!");
  };

  
const handleWithdraw = async () => {
    alert("You will now Unstake your tokens and claim reward!");
    await withdraw([]);
    alert("Tokens withdrawn successfully!");
  };


  useEffect(() => {
    setIsEnabled(Number(totalStaked) > 0);
  }, [totalStaked]);

  useEffect(() => {
    setIsEarnEVaultStakeLoading(true);
    if (getEstimatedRewardData) {
      const decimals = 18; // replace 18 with the actual decimals of the token
      const earnEVaultStakeValue = ethers.utils.formatUnits(getEstimatedRewardData.toString(), decimals);
      const formattedValue = parseFloat(earnEVaultStakeValue).toFixed(4);
      setearnEVaultStake(formattedValue);
      setIsEarnEVaultStakeLoading(false);
    }
  }, [getEstimatedRewardData]);

  useEffect(() => {
    if (ApyData) {
      setApy(ApyData.toString());
    }
  }, [ApyData]);

  useEffect(() => {
    if (getTotalStakedData) {
      const decimals = 18; // replace 18 with the actual decimals of the token
      const totalStakedValue = ethers.utils.formatUnits(getTotalStakedData.toString(), decimals);
      SetTotalStaked(totalStakedValue);
    }
  }, [getTotalStakedData]);



  const approveTokens = async (amount: string) => {
    if (!address) return;
    // eslint-disable-next-line
    const data = await approve(
      [stakingContractAddress, ethers.utils.parseEther(amount)]
    );
  };

  const stakeTokens = async (amount: string) => {
    if (!address) return;
    await stake([ethers.utils.parseEther(amount), {}]);
  };

  function formatAmt(amt: any) {
    let a: any;
    if (BigNumber.isBigNumber(amt)) {
      a = amt.div(BigNumber.from("1000000000000000000"));
    } else {
      amt = BigNumber.from(amt);
      a = amt.div(BigNumber.from("1000000000000000000"));
    }
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return formatter.format(a);
  }


    return (
        
        <div className="stake-card" style={{ height: isExpanded ? '200px' : '125px' }}>
            <div className="stake-card-header" style={{ paddingLeft: '15px'}}>
                <img src={props.logo} alt={props.manualEVault} className="stake-card-logo" />
                <div className="stake-card-info">
                    <h3 className="stake-card-title">{props.manualEVault}</h3>
                    <p className="stake-card-subtitle">{props.earnEVaultStake}</p>
                </div>
            </div>
            
<Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        style={{
            content: {
                width: '325px',
                height: '500px',
                margin: 'auto',
                backgroundColor: modalIsOpen ? '#333333' : 'transparent'
            },
            overlay: {
                backgroundColor: modalIsOpen ? 'rgba(0,0,0,0.5)' : 'transparent'
            }
        }}
    >
        <div style={{ position: 'absolute' ,right:"10px", top: '10px'}}> <button onClick={closeModal}>X</button></div>
        <div className="modal-inner-content">
        <p style={{textAlign: 'center', fontSize: "30px"}}>Stake eVault</p>
            <div className="logo-container" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={props.logo} alt={props.manualEVault} className="modal-logo" style={{width: '50px', height: '50px'}} />
            </div>
            <div className="textbox-container" style={{textAlign: 'center', marginTop: "5px", marginBottom: "10px"}}>
            <input
  type="number"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
  style={{ 
    width: '80%', 
    padding: '8px', 
    borderRadius: '4px', 
    border: '1px solid #ccc', 
    marginTop: '10px' 
  }}
/>  
            </div>
            <p style={{textAlign: 'center', fontSize: "10px", marginTop: "3px" }}>
        <b>Your Balance: {balanceOf && formatAmt(balanceOf?.toString())} eVault</b>

      </p>
        
            <p style={{textAlign: 'center',fontSize: "20px" ,  marginTop: "5px"}}>Stake eVault, Earn eVault</p>
            <p style={{textAlign: 'center'}}> You can withdraw your stake and reward at any time. If you have an NFT, you'll receive a 1.25x multiplier of rewards.</p>
            <div style={{textAlign: 'center',  marginTop: "10px"}}>
                
            <Web3Button
  contractAddress={"0x4356Ef291421416AA3D1216023a2509da4BB06fC"}
  action={handleStake}
  isDisabled={!amount || Number(totalStaked) > 1}
>
  Stake!
</Web3Button>
<div style={{ marginTop: "20px"}}>

<Web3Button
  contractAddress={"0x4356Ef291421416AA3D1216023a2509da4BB06fC"}
  action={handleWithdraw}
  isDisabled={!isEnabled}
  
>
  Withdraw!
</Web3Button>
          
</div></div>
          <div style={{ textAlign: 'center', marginTop: "10px" }}>
  <a href="https://pancakeswap.finance/swap?outputCurrency=0x7722C97E49453D619fB791C9e0dD288838d03fa0" target="_blank" rel="noopener noreferrer">
    <button>Get eVault</button>
  </a>
</div>
            </div>
            
        
    </Modal>
            <div className="stake-card-body">
                <div className="stake-card-stats">
                {ApyData ? (
  <div className="stat">
    <p className="stat-value" style={{ fontSize: "14px" }}>{apy}%</p>
    <p className="stat-label">APY</p>
  </div>
) : (
  <div className="stat">
    <p className="stat-value" style={{ fontSize: "14px" }}>loading...</p>
  </div>
)}
                    


                    {getTotalStakedData ? (
                        <div className="stat2">
                       <p className="stat-value" style={{ fontSize: "14px" }}>{totalStaked}</p>
                        <p className="stat-label">Total Staked</p>
                        </div>
                        ) : (
                            <div className="stat2">
                        <p className="stat-value" style={{ fontSize: "14px" }}>loading...</p>
                        </div>
                        )}
                    
                </div>
                <div className="stake-card-actions">
                <button
  onClick={() => setIsExpanded(!isExpanded)}
  style={{
    background: "linear-gradient(to right, #333333, #000000)",
    color: "white",
    padding: "8px 5px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    marginRight: "15px",
    transition: "background-color 0.3s ease",
    marginTop: "4px",
    width: "100px", 
    height: "40px" 
  }}
>
  {isExpanded ? " Show less" : "Details"}
</button>
                </div>
            </div>
            {isExpanded && (
                <div className="stake-card-expanded">
                    <div className="expanded-header">
                        <div className="stake-card-info">
                        {isEarnEVaultStakeLoading ? (
  <div style={{marginLeft: "15px"}}>
    <div className="stat-value" style={{ fontSize: "14px", }}>loading...</div>
  </div>
) : (
  <div>
    <p className="stat-value" style={{ fontSize: "14px" }}>{earnEVaultStake}</p>
    <p className="stat-label">Earn eVault Stake</p>
  </div>
)}
                        </div>
                    </div>
                    <div className="expanded-body">
                        <div className="expanded-actions">
                        
                        
                        <button
  onClick={() => {
    openModal();
  }}
  style={{
    marginRight: "5px",
    background: "linear-gradient(to right, #333333, #000000)",
    color: "white",
    padding: "8px 5px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
    marginTop: "10px",
    width: "120px", 
    height: "40px" 
}}
>
  Stake
</button>
                        </div>
                        </div>
                        </div>
                )}
        </div>
    );
};
export default StakeCard;