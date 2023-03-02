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
import { ethers } from "ethers";
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
  const { contract: mainContract } = useContract("0x4356Ef291421416AA3D1216023a2509da4BB06fC");
  const tokenContractAddress = "0x7722C97E49453D619fB791C9e0dD288838d03fa0";
  const stakingContractAddress = "0x4356Ef291421416AA3D1216023a2509da4BB06fC";
// eslint-disable-next-line
  const { contract: stakeContract } = useContract(stakingContractAddress, "custom");
// eslint-disable-next-line
  const { data: ApyData, isLoading: isApyLoading } = useContractRead(mainContract, "getFixedAPY");
// eslint-disable-next-line
  const { data: getTotalStakedData, isLoading: isTotalStakedLoading } = useContractRead(mainContract, "getTotalStaked");
  const { contract: token } = useContract(tokenContractAddress);
// eslint-disable-next-line
  const { mutateAsync: approve, isLoading: isApproveLoading } = useContractWrite(
    token,
    "approve"
  );

  const { mutateAsync: stake } = useContractWrite(mainContract, "stake");
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
    alert("Pool Enabled!");
    await stakeTokens(amount);
    alert("Tokens staked successfully!");
  };

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
            <div className="textbox-container" style={{textAlign: 'center', marginTop: "20px"}}>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>

        
            <p style={{textAlign: 'center',  marginTop: "10px"}}>Modal content here</p>
            <div style={{textAlign: 'center',  marginTop: "10px"}}>
                
            <Web3Button
  contractAddress={"0x4356Ef291421416AA3D1216023a2509da4BB06fC"}
  action={handleStake}
  isDisabled={!amount}
>
  Stake!
</Web3Button>
          
          </div>
            <div style={{textAlign: 'center',  marginTop: "10px"}}><button>Get eVault</button></div>
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
                <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? " Less Details" : "Details"}</button>
                </div>
            </div>
            {isExpanded && (
                <div className="stake-card-expanded">
                    <div className="expanded-header">
                        <div className="stake-card-info">
                            <h3 className="stake-card-title2" style={{ fontSize: "14px" }}>Profit</h3>
                            <p className="stake-card-subtitle">Soon%</p>
                        </div>
                    </div>
                    <div className="expanded-body">
                        <div className="expanded-actions">
                        <p style={{fontSize: "13px", fontWeight: "bold",marginBottom:"0px"}}>START STAKING</p>
                        
<button onClick={() => { openModal();}}>Stake</button>
                        </div>
                        </div>
                        </div>
                )}
        </div>
    );
};
export default StakeCard;