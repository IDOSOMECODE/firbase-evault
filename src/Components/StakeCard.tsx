import React, { useState } from 'react';
import "./StakeCard.css";

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

    return (
        <div className="stake-card" style={{ height: isExpanded ? '250px' : '125px' }}>
            <div className="stake-card-header" style={{ paddingLeft: '15px'}}>
                <img src={props.logo} alt={props.manualEVault} className="stake-card-logo" />
                <div className="stake-card-info">
                    <h3 className="stake-card-title">{props.manualEVault}</h3>
                    <p className="stake-card-subtitle">{props.earnEVaultStake}</p>
                </div>
            </div>
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
                    <button onClick={() => setIsExpanded(!isExpanded)}>Details</button>
                </div>
            </div>
            {isExpanded && (
                <div className="stake-card-expanded">
                    <div className="expanded-header">
                        <img src={props.logo} alt={props.manualEVault} className="stake-card-logo" />
                        <div className="stake-card-info">
                            <h3 className="stake-card-title2">Recent Profit</h3>
                            <p className="stake-card-subtitle">{props.recentEVaultProfit}</p>
                        </div>
                    </div>
                    <div className="expanded-body">
                        <div className="expanded-actions">
                        <p style={{fontSize: "13px", fontWeight: "bold"}}>START STAKING</p>
                        <button>Connect</button>
                        </div>
                        </div>
                        </div>
                )}
        </div>
    );
};
export default StakeCard;