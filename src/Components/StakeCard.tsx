import { useEffect, useState } from "react";
import "./StakeCard.css";
import Modal from 'react-modal';
import {
    ConnectWallet,
    useAddress,
    useContract,
    useContractRead,
    useContractWrite,
    useTokenBalance,
    Web3Button,
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
    const { contract } = useContract("0xc0601e9a207b3a7a3229b1caf3c6c3a466cf1897");
    const { mutateAsync: stake, isLoading } = useContractWrite(contract, "stake")
    const [amount, setAmount] = useState<string>("");
    const stakingContractAddress = "0xc0601e9a207b3a7a3229b1caf3c6c3a466cf1897";

    
    const [isExpanded, setIsExpanded] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false)
const openModal = () => {
    setModalIsOpen(true);
};

const closeModal = () => {
    setModalIsOpen(false);
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
            contractAddress={"0xc0601e9a207b3a7a3229b1caf3c6c3a466cf1897"}
            action={async (contract) => {
                await contract.erc20.setAllowance(stakingContractAddress, amount);
                ;await contract.call(
                    "stake",
                    ethers.utils.parseEther(amount)
                  );
                  alert("Tokens staked successfully!");
                }}
              >
            Stake!
          </Web3Button>
          
          </div>
            <div style={{textAlign: 'center',  marginTop: "10px"}}><button>Get eVault</button></div>
            </div>
            
        
    </Modal>
            <div className="stake-card-body">
                <div className="stake-card-stats">
                    <div className="stat">
                        <p className="stat-value" style={{ fontSize: "14px" }}>{props.apy}%</p>
                        <p className="stat-label">APY</p>
                    </div>
                    <div className="stat2">
                       <p className="stat-value" style={{ fontSize: "14px" }}>hi</p>
                        <p className="stat-label">Total Staked</p>
                    </div>
                </div>
                <div className="stake-card-actions">
                <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? " Less Details" : "Details"}</button>
                </div>
            </div>
            {isExpanded && (
                <div className="stake-card-expanded">
                    <div className="expanded-header">
                        <div className="stake-card-info">
                            <h3 className="stake-card-title2" style={{ fontSize: "14px" }}>Recent Profit</h3>
                            <p className="stake-card-subtitle">{props.recentEVaultProfit}</p>
                        </div>
                    </div>
                    <div className="expanded-body">
                        <div className="expanded-actions">
                        <p style={{fontSize: "13px", fontWeight: "bold",marginBottom:"0px"}}>START STAKING</p>
                        {!isEnabled && <button onClick={() => setIsEnabled(true)}>Enable</button>}
{isEnabled && <button onClick={() => { openModal();}}>Stake</button>}
                        </div>
                        </div>
                        </div>
                )}
        </div>
    );
};
export default StakeCard;