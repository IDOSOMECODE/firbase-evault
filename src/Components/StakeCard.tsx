import React, { useState } from 'react';
import "./StakeCard.css";
import Modal from 'react-modal';

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
                <input type="text" id="range-value" style={{width: '200px', height: '40px', fontSize: '20px'}} placeholder="" />
            </div>
            <div className="range-slider-wrapper" style={{textAlign: 'center' , marginTop: "10px"}}>
                <input id="my-range" type="range" className="range-slider-horizontal" onInput={(e) => {
                    const rangeValue = document.getElementById('range-value') as HTMLInputElement;
                    rangeValue.value = (e.currentTarget as HTMLInputElement).value;
                }} min={0} max={1000000}/>
            </div>
            <div className="button-container" style={{textAlign: 'center', justifyContent: "space-between", display: "flex", marginTop: "10px"}}>
            <button style={{marginLeft: "40px"}}>25%</button>
                <button>50%</button>
                <button>75%</button>
                <button style={{marginRight: "40px"}} >100%</button>

</div>
            <p style={{textAlign: 'center',  marginTop: "10px"}}>Modal content here</p>
            <div style={{textAlign: 'center',  marginTop: "10px"}}><button style={{fontSize: '20px', padding: '10px 20px', width: '200px', height: '50px'}}>Stake</button></div>
            <div style={{textAlign: 'center',  marginTop: "10px"}}><button>Get eVault</button></div>
            </div>
            
        
    </Modal>
            <div className="stake-card-body">
                <div className="stake-card-stats">
                    <div className="stat">
                        <p className="stat-value">{props.apy}%</p>
                        <p className="stat-label">APY</p>
                    </div>
                    <div className="stat2">
                        <p className="stat-value">{props.totalStaked}</p>
                        <p className="stat-label">Total Staked</p>
                    </div>
                </div>
                <div className="stake-card-actions">
                <button onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? "Less Details" : "Details"}</button>
                </div>
            </div>
            {isExpanded && (
                <div className="stake-card-expanded">
                    <div className="expanded-header">
                        <div className="stake-card-info">
                            <h3 className="stake-card-title2">Recent Profit</h3>
                            <p className="stake-card-subtitle">{props.recentEVaultProfit}</p>
                        </div>
                    </div>
                    <div className="expanded-body">
                        <div className="expanded-actions">
                        <p style={{fontSize: "13px", fontWeight: "bold"}}>START STAKING</p>
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